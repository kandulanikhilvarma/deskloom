import {test,expect, type Page} from '@playwright/test';
import {randomUUID} from 'node:crypto';
import {readFileSync} from 'node:fs';

test('isolated accounts can save, restore, and delete; other accounts cannot access the plan',async({browser,baseURL})=>{
 test.skip(process.env.DESKLOOM_AUTH_TEST!=='true','Needs an isolated verification Auth branch.');
 expect(baseURL).toMatch(/^http:\/\/localhost:/);
 expect(readFileSync('.env.development.local','utf8')).toContain('ep-ancient-heart-az8wj7m0');
 const a=await browser.newContext(),b=await browser.newContext();
 const page=await a.newPage(),other=await b.newPage();
 const password=`Deskloom-${randomUUID()}!`;
 const email=`deskloom-${randomUUID()}@example.test`;
 async function signup(p:Page,address:string){
  await p.goto(baseURL!);await p.getByRole('button',{name:'Sign in',exact:true}).click();
  await p.getByRole('button',{name:'New here? Create an account'}).click();
  await p.getByLabel('Your name').fill('Isolated verification');
  await p.getByLabel('Email address').fill(address);await p.getByLabel('Password',{exact:true}).fill(password);
  await p.getByRole('button',{name:'Create account',exact:true}).click();
  await expect(p.getByRole('dialog')).not.toBeVisible({timeout:90000});
 }
 try{
  await signup(page,email);
  await page.getByLabel('Plan name').fill('Isolated saved plan');
  await page.getByLabel('Upload a space photo').setInputFiles('public/desk-inspiration.png');
  await expect(page.getByAltText('Your uploaded workspace photo')).toBeVisible();
  await page.getByRole('button',{name:'Save plan',exact:true}).click();
  await expect(page.getByText('Your plan is saved to your account.',{exact:true})).toBeVisible({timeout:90000});
  const list=await a.request.get(`${baseURL}/api/plans`);expect(list.status()).toBe(200);
  const id=(await list.json()).plans[0].id;
  await page.getByRole('button',{name:'Save plan',exact:true}).click();
  await page.getByRole('button',{name:'Saved spaces',exact:true}).click();
  await expect(page.locator('.saved-plan')).toHaveCount(1);
  await page.getByRole('button',{name:'Open plan'}).click();
  await expect(page.getByLabel('Plan name')).toHaveValue('Isolated saved plan');
  await expect(page.getByAltText('Your uploaded workspace photo')).toBeVisible();
  await signup(other,`deskloom-${randomUUID()}@example.test`);
  expect((await b.request.get(`${baseURL}/api/plans/${id}`)).status()).toBe(404);
  expect((await b.request.delete(`${baseURL}/api/plans/${id}`,{headers:{origin:baseURL!}})).status()).toBe(404);
  await page.locator('.account-btn').click();await page.getByRole('button',{name:'Sign out',exact:true}).click();
  await expect(page.getByRole('button',{name:'Sign in',exact:true})).toBeVisible();
  expect((await a.request.get(`${baseURL}/api/plans`)).status()).toBe(401);
  await page.getByRole('button',{name:'Sign in',exact:true}).click();
  await page.getByLabel('Email address').fill(email);await page.getByLabel('Password',{exact:true}).fill(password);
  await page.getByRole('dialog').getByRole('button',{name:'Sign in',exact:true}).click();
  await expect(page.getByRole('dialog')).not.toBeVisible({timeout:90000});
  await page.getByRole('button',{name:'Saved spaces',exact:true}).click();
  await expect(page.locator('.saved-plan')).toHaveCount(1);
  page.once('dialog',d=>d.accept());await page.getByRole('button',{name:'Delete Isolated saved plan'}).click();
  await expect(page.locator('.saved-plan')).toHaveCount(0);
 }finally{await a.close();await b.close();}
});
