import {test,expect} from '@playwright/test';
import {readFile} from 'node:fs/promises';

test('switching direction keeps the Products view and preserves the edited version',async({page})=>{
 await page.goto('/');await page.getByLabel('Where you shop').selectOption('EU');
 await page.getByRole('button',{name:'laptop',exact:true}).click();
 await page.getByRole('button',{name:'Products',exact:true}).click();
 await page.locator('.board-product[data-product-id="de-lagkapten"]').click();
 await page.locator('.swap-list button').filter({hasText:'MITTZON'}).click();
 const changed=await page.locator('.total-block strong').innerText();
 await page.locator('.direction').nth(1).click();
 await expect(page.locator('.product-board')).toBeVisible();
 await expect(page.locator('.active-version')).toContainText('Room to focus');
 await page.locator('.direction').nth(0).click();
 await expect(page.locator('.board-product[data-product-id="de-mittzon"]')).toHaveCount(1);
 await expect(page.locator('.board-product[data-product-id="de-lagkapten"]')).toHaveCount(0);
 await expect(page.locator('.total-block strong')).toHaveText(changed);
 await page.locator('.board-product[data-product-id="de-mittzon"]').click();await page.getByRole('button',{name:'Remove',exact:true}).click();
 await page.locator('.direction').nth(2).click();await page.locator('.direction').nth(0).click();
 await expect(page.locator('.board-product[data-product-id="de-mittzon"]')).toHaveCount(0);
 await page.getByRole('button',{name:'Undo',exact:true}).click();
 await expect(page.locator('.board-product[data-product-id="de-mittzon"]')).toHaveCount(1);
});

test('photo upload opens three real product plans with direct regional purchase links',async({page})=>{
 await page.goto('/');await page.getByLabel('Where you shop').selectOption('EU');
 await page.getByRole('button',{name:'laptop',exact:true}).click();
 await page.getByLabel('Upload a space photo').setInputFiles('public/desk-inspiration.png');
 await expect(page.getByAltText('Your uploaded workspace photo')).toBeVisible();
 await expect(page.locator('.comparison-version')).toHaveCount(3);
 const selections:string[][]=[];
 for(const version of await page.locator('.comparison-version').all()){
  const products=version.locator('li[data-product-id]');expect(await products.count()).toBeGreaterThan(5);
  const ids=await products.evaluateAll(items=>items.map(item=>item.getAttribute('data-product-id')!));selections.push(ids);
  for(const link of await version.locator('li a').all())await expect(link).toHaveAttribute('href',/^https:\/\/www\.(ikea\.com\/de\/de|dell\.com\/de-de|logitech\.com\/de-de)\//);
 }
 expect(new Set(selections.map(ids=>ids.join(','))).size).toBe(3);
 await expect(page.locator('.preview-explainer')).toContainText('Personal photo redesign is unavailable');
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download all three lists',exact:true}).click();
 const download=await downloadPromise;expect(download.suggestedFilename()).toBe('deskloom-three-setups.txt');
 const exported=await readFile((await download.path())!,'utf8');
 for(const title of ['Quiet mornings','Room to focus','Creative corner'])expect(exported).toContain(title);
 expect(exported.match(/https:\/\//g)!.length).toBeGreaterThan(15);
 await page.getByRole('button',{name:'Edit Creative corner',exact:true}).click();
 await expect(page.locator('.active-version')).toContainText('Creative corner');
 const cards=page.locator('.board-product');expect(await cards.count()).toBeGreaterThan(5);
 await expect(cards.first().locator('.board-buy')).toHaveAttribute('href',/^https:\/\//);
 await cards.filter({has:page.locator('small',{hasText:' · desk'})}).first().click();
 await expect(page.locator('.spec-list')).toContainText('width');
 await expect(page.locator('.product-detail')).toContainText('Price reference checked');
 // Preference changes must discard cached plans from the old country.
 await page.getByLabel('Where you shop').selectOption('IN');
 await page.locator('.direction').nth(0).click();
 expect(await cards.evaluateAll(items=>items.every(item=>item.getAttribute('data-product-id')!.startsWith('in-')))).toBe(true);
});

test('comparison works on a phone and reports incomplete low-budget setups honestly',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await page.getByRole('button',{name:'Compare setups',exact:true}).click();
 await expect(page.locator('.comparison-version')).toHaveCount(3);
 await expect(page.locator('.comparison-version').first()).toContainText('Partial setup');
 await page.getByLabel('Your total budget').fill('50');
 for(const version of await page.locator('.comparison-version').all())await expect(version).toContainText('No product fits');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
});
