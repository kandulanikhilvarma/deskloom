import {test,expect} from '@playwright/test';
test('each direction changes the actual room image and never pins nonexistent products to it',async({page})=>{
 await page.goto('/');const images:string[]=[];
 for(const button of await page.locator('.direction').all()){
  await button.click();await expect(button).toHaveAttribute('aria-pressed','true');
  images.push((await page.locator('.scene-photo').getAttribute('src'))!);
  await expect(page.locator('.scene .hotspot')).toHaveCount(0);
 }
 expect(new Set(images).size).toBe(3);
 await page.getByLabel('Upload a space photo').setInputFiles('public/desk-inspiration.png');
 await expect(page.getByAltText('Your uploaded workspace photo')).toBeVisible();
 await expect(page.locator('.scene .hotspot')).toHaveCount(0);
});

test('euro versions have different desks, monitors, and keyboards with working product photos and German links',async({page})=>{
 await page.setViewportSize({width:1440,height:1050});await page.goto('/');
 await page.getByLabel('Where you shop').selectOption('EU');
 await page.getByRole('button',{name:'laptop',exact:true}).click();
 const versions:string[][]=[];
 for(const direction of await page.locator('.direction').all()){
  await direction.click();await page.getByRole('button',{name:'Products',exact:true}).click();
  const cards=page.locator('.board-product');expect(await cards.count()).toBeGreaterThan(5);
  const ids=await cards.evaluateAll(cards=>cards.map(c=>c.getAttribute('data-product-id')!));
  expect(ids.every(id=>id.startsWith('de-'))).toBe(true);versions.push(ids);
  for(const category of ['desk','monitor','keyboard']){
   const card=cards.filter({has:page.locator('small',{hasText:new RegExp(' · '+category+'$')})}).first();
   await card.scrollIntoViewIfNeeded();const img=card.locator('img');await expect(img).toBeVisible();
   await expect.poll(()=>img.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
   await card.click();await expect(page.locator('.retailer-link')).toHaveAttribute('href',/https:\/\/www\.(ikea\.com\/de\/de|dell\.com\/de-de|logitech\.com\/de-de)\//);
   await expect(page.locator('.detail-price')).toContainText('€');
   await page.getByRole('button',{name:'Back to all products'}).click();
  }
 }
 expect(new Set(versions.map(v=>v.join(','))).size).toBe(3);
});

test('a removed or swapped product changes its exact product view',async({page})=>{
 await page.goto('/');await page.getByLabel('Where you shop').selectOption('EU');
 await page.getByRole('button',{name:'laptop',exact:true}).click();
 await page.getByRole('button',{name:'Products',exact:true}).click();
 const desk=page.locator('.board-product[data-product-id="de-lagkapten"]');await desk.click();
 await page.locator('.swap-list button').filter({hasText:'MITTZON'}).click();
 await expect(page.locator('.board-product[data-product-id="de-lagkapten"]')).toHaveCount(0);
 await expect(page.locator('.board-product[data-product-id="de-mittzon"]')).toHaveCount(1);
 await page.getByRole('button',{name:'Remove',exact:true}).click();
 await expect(page.locator('.board-product[data-product-id="de-mittzon"]')).toHaveCount(0);
});
