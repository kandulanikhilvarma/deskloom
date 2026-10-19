import {test,expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('room catalog exposes furniture and fabric choices with clear photos, materials, local links, and support checks',async({page})=>{
  await page.goto('/',{waitUntil:'domcontentloaded'});
  await page.getByLabel('Your total budget').fill('20000');
  for(const equipment of ['desk','chair','laptop'])await page.getByRole('button',{name:equipment,exact:true}).click();
  await page.locator('.electronics-launcher:visible .electronics-shortcuts button').filter({hasText:'Rugs'}).click();
  await expect(page.locator('.electronics-card')).toHaveCount(3);
  await page.locator('.electronics-card[data-product-id="in-lohals"]').getByRole('button',{name:'Details and options'}).click();
  await expect(page.getByRole('dialog')).toContainText('Material');
  await expect(page.getByRole('dialog')).toContainText('rug underlay');
  await expect(page.getByRole('dialog').getByRole('button',{name:'Add to my plan'})).toBeDisabled();
  await page.keyboard.press('Escape');
  await page.getByRole('button',{name:'rug underlay',exact:true}).click();
  await page.locator('.electronics-card[data-product-id="in-lohals"]').getByRole('button',{name:'Details and options'}).click();
  await page.getByRole('button',{name:'Add to my plan',exact:true}).click();
  await page.getByRole('button',{name:'Products',exact:true}).click();
  await expect(page.locator('.board-product[data-product-id="in-lohals"]')).toHaveCount(1);
  await page.getByRole('button',{name:'Undo',exact:true}).click();
  await expect(page.locator('.board-product[data-product-id="in-lohals"]')).toHaveCount(0);
  for(const market of ['IN','EU','US']){
    await page.getByLabel('Where you shop').selectOption(market);
    for(const [family,category] of [['Desks and chairs','Desks'],['Desks and chairs','Chairs'],['Rugs and fabrics','Rugs'],['Rugs and fabrics','Curtains and fabrics']]){
      await page.getByRole('button',{name:'Browse products',exact:true}).click();
      await page.getByRole('button',{name:family,exact:true}).click();
      await page.locator('.electronics-categories').getByRole('button',{name:new RegExp('^'+category+' ')}).click();
      expect(await page.locator('.electronics-card').count()).toBeGreaterThan(0);
      for(const card of await page.locator('.electronics-card').all()){
        const photo=card.locator('img');await photo.scrollIntoViewIfNeeded();await expect.poll(()=>photo.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        await expect(card.locator('.board-buy')).toHaveAttribute('href',new RegExp('ikea\\.com/'+(market==='IN'?'in/en':market==='EU'?'de/de':'us/en')+'/p/'));
      }
    }
  }
});

test('six real-room plans have credits, budgeted products, useful fit advice, replacement, and undo',async({page})=>{
  await page.goto('/',{waitUntil:'domcontentloaded'});await page.getByLabel('Where you shop').selectOption('EU');
  await page.getByRole('button',{name:'laptop',exact:true}).click();
  const before=await page.locator('.board-product').evaluateAll(cards=>cards.map(c=>c.getAttribute('data-product-id')));
  await page.getByRole('button',{name:'Room ideas',exact:true}).click();
  await expect(page.locator('.room-story')).toHaveCount(6);
  for(const story of await page.locator('.room-story').all()){
    const photo=story.locator('img');await photo.scrollIntoViewIfNeeded();await expect.poll(()=>photo.evaluate(el=>(el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    await expect(story.locator('figcaption')).toContainText('Pexels');
    await story.locator('summary').click();expect(await story.locator('.room-product-details li').count()).toBeGreaterThan(0);
    await expect(story.locator('.room-plan-summary')).toContainText('€');
  }
  await expect(page.locator('.comfort-source-note')).toContainText('eye level');
  await page.getByLabel('Explore a room idea').selectOption('daylight');
  await expect(page.locator('.room-story')).toHaveCount(1);
  await page.getByRole('button',{name:'Use this local product plan'}).click();
  await expect(page.locator('.product-board')).toBeVisible();
  await page.getByRole('button',{name:'Undo',exact:true}).click();
  expect(await page.locator('.board-product').evaluateAll(cards=>cards.map(c=>c.getAttribute('data-product-id')))).toEqual(before);
});

test('room photographs have an accurate recovery state; catalog and inspiration remain accessible on phone and desktop',async({page})=>{
  await page.setViewportSize({width:390,height:844});await page.goto('/',{waitUntil:'domcontentloaded'});
  const families=page.locator('.mobile-product-launcher .electronics-shortcuts button');
  await expect(families).toHaveCount(6);
  for(const family of await families.all()){await expect(family).toBeVisible();expect(await family.evaluate(el=>el.getBoundingClientRect().bottom<=innerHeight)).toBe(true);}
  await page.getByRole('button',{name:'Browse products',exact:true}).click();
  await page.getByRole('button',{name:'Rugs and fabrics',exact:true}).click();
  await page.getByLabel('Only show products I can add or replace within this budget').check();
  await expect(page.getByRole('heading',{name:'No matching model.'})).toBeVisible();
  await page.getByRole('button',{name:'Clear filters',exact:true}).click();await expect(page.locator('.electronics-card')).toHaveCount(3);
  for(const width of [390,1440])for(const dark of [false,true]){
    await page.setViewportSize({width,height:900});
    const darkNow=await page.locator('html').getAttribute('data-theme')==='dark';if(dark!==darkNow)await page.getByRole('button',{name:`Use ${dark?'dark':'light'} theme`}).click();
    for(const view of ['Browse products','Room ideas']){
      await page.getByRole('button',{name:view,exact:true}).click();
      expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
      expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
    }
  }
  await page.route('https://images.pexels.com/**',route=>route.abort());
  await page.reload({waitUntil:'domcontentloaded'});await page.getByRole('button',{name:'Room ideas',exact:true}).click();
  await page.locator('.room-story').first().scrollIntoViewIfNeeded();
  await expect(page.locator('.room-photo-failure').first()).toContainText('This photograph could not load.');
  await expect(page.locator('.room-photo-failure').first().getByRole('link')).toHaveAttribute('href',/^https:\/\/www\.pexels\.com\/photo\//);
});
