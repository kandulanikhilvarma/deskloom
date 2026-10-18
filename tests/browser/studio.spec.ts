import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import path from 'node:path';

test('photo, budget, variants, markers, removal, and export form a complete guest workflow',async({page})=>{
 await page.setViewportSize({width:1440,height:1050});
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('/');
 await expect(page.getByRole('heading',{name:'A space that works for you.'})).toBeVisible();
 await page.getByLabel('Your total budget').fill('50');
 await expect(page.getByRole('heading',{name:'No purchase needed.'})).toBeVisible();
 await page.getByLabel('Your total budget').fill('1500');
 for(const item of ['desk','chair','laptop','monitor','keyboard','mouse'])await page.getByRole('button',{name:item,exact:true}).click();
 await page.getByLabel('Upload a space photo').setInputFiles(path.resolve('public/desk-inspiration.png'));
 await expect(page.getByAltText('Your uploaded workspace photo')).toBeVisible();
 const variants=page.locator('.direction');
 await variants.nth(1).click();await expect(variants.nth(1)).toHaveAttribute('aria-pressed','true');
 await variants.nth(2).click();await expect(variants.nth(2)).toHaveAttribute('aria-pressed','true');
 const before=await page.locator('.product-row').count();expect(before).toBeGreaterThan(0);
 await page.getByRole('button',{name:'Products',exact:true}).click();
 await page.locator('.board-product').first().click();
 await expect(page.getByRole('heading',{name:'Product details'})).toBeVisible();
 await expect(page.locator('.retailer-link')).toHaveAttribute('href',/^https:\/\//);
 await page.getByRole('button',{name:'Move marker',exact:true}).click();
 await page.getByLabel('Horizontal position').fill('65');
 await page.getByLabel('Vertical position').fill('35');
 await expect(page.locator('.hotspot.active')).toHaveCSS('left',/px$/);
 await page.getByRole('button',{name:'Remove',exact:true}).click();
 expect(await page.locator('.product-row').count()).toBeLessThan(before);
 await page.getByRole('button',{name:'Undo',exact:true}).click();
 await expect(page.locator('.product-row')).toHaveCount(before);
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Download shopping list'}).click();
 const download=await downloadPromise;expect(download.suggestedFilename()).toBe('deskloom-shopping-list.txt');
 await page.getByRole('button',{name:'Layout map',exact:true}).click();await expect(page.locator('.floorplan')).toBeVisible();
 await page.getByRole('button',{name:/Redesign my room/}).click();
 await expect(page.getByRole('heading',{name:'AI previews are not active yet.'})).toBeVisible();
 await page.getByRole('button',{name:'Close dialog'}).click();
 await page.getByRole('button',{name:'Save plan',exact:true}).click();
 await expect(page.getByRole('dialog')).toBeVisible();
 await page.getByRole('button',{name:'Forgot password?'}).click();
 await expect(page.getByRole('button',{name:'Send recovery email'})).toBeVisible();
 await page.getByRole('button',{name:'Close dialog'}).click();
 await page.getByRole('button',{name:'Saved spaces',exact:true}).click();await expect(page.getByRole('heading',{name:'A place for your plans.'})).toBeVisible();
 expect(errors).toEqual([]);
});

test('regional budgets, constraints, dark mode, keyboard access, and mobile layout work',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.goto('/');
 await page.getByLabel('Where you shop').selectOption('EU');await expect(page.getByLabel('Your total budget')).toHaveValue('1500');
 await page.getByLabel('Where you shop').selectOption('US');await expect(page.getByLabel('Your total budget')).toHaveValue('150');
 await page.getByLabel('Where you shop').selectOption('IN');
 await page.getByLabel('Your total budget').fill('20000');
 await page.getByRole('button',{name:'Your space, your rules'}).click();
 await page.getByLabel('Desk width · cm').fill('60');
 await page.getByLabel('Daylight at your desk').selectOption('low');
 await page.getByRole('button',{name:'Use dark theme'}).click();
 await expect(page.locator('html')).toHaveAttribute('data-theme','dark');
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=window.innerWidth)).toBe(true);
 await page.getByRole('button',{name:'Field guide',exact:true}).click();await expect(page.getByRole('heading',{name:'Give plants a place to thrive.'})).toBeVisible();
 await page.getByRole('button',{name:'Studio',exact:true}).click();
 await page.keyboard.press('Tab');expect(await page.locator(':focus').count()).toBe(1);
});

test('desktop and mobile light and dark interfaces have no serious accessibility violations',async({page})=>{
 for(const [width,height] of [[1440,1050],[390,844]]){
  await page.setViewportSize({width,height});await page.goto('/');await page.locator('.scene-photo').waitFor();
  await page.evaluate(()=>document.fonts.ready);
  for(const dark of [false,true]){
   if(dark)await page.getByRole('button',{name:'Use dark theme'}).click();
   const results=await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze();
   expect(results.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))).toEqual([]);
  }
 }
});

test('private APIs reject guests and the inactive image provider returns an accurate state',async({request})=>{
 const plans=await request.get('/api/plans');expect(plans.status()).toBe(401);
 const availability=await request.get('/api/render');const active=(await availability.json()).available;expect(typeof active).toBe('boolean');
 const render=await request.post('/api/render',{data:{}});expect(render.status()).toBe(active?401:503);
});

test('save representative desktop and mobile screenshots',async({page})=>{
 await page.setViewportSize({width:1440,height:1050});await page.goto('/');
 for(const item of ['desk','chair','laptop','monitor','keyboard','mouse'])await page.getByRole('button',{name:item,exact:true}).click();
 await page.evaluate(()=>document.fonts.ready);await page.locator('.scene-photo').evaluate(async(el)=>{await (el as HTMLImageElement).decode();});
 await page.screenshot({path:'docs/screenshots/desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'docs/screenshots/mobile.png',fullPage:true});
});
