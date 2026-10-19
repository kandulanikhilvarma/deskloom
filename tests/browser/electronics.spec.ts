import {test, expect} from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('electronics stay visible at tiny budgets with model details, real local links, and comparisons', async ({page}) => {
  await page.goto('/', {waitUntil:'domcontentloaded'});
  await page.getByLabel('Your total budget').fill('50');
  await expect(page.getByRole('heading', {name: 'Keyboards. Mice. Monitors.'})).toBeVisible();
  await page.locator('.electronics-shortcuts button').first().click();
  await expect(page.locator('.electronics-card')).toHaveCount(6);
  const before = await page.locator('.product-row').count();
  await page.getByLabel('Product type', {exact: true}).selectOption('Mechanical keyboard');
  await expect(page.locator('.electronics-card')).toHaveCount(1);
  await page.getByRole('button', {name: 'Details and options'}).click();
  const dialog = page.getByRole('dialog');
  await expect(dialog).toContainText('Key switches');
  await expect(dialog).toContainText('Tactile Quiet, Clicky, or Linear');
  await expect(dialog.getByRole('button', {name: 'Add to my plan'})).toBeDisabled();
  await expect(dialog.getByRole('link', {name: 'View at Logitech'})).toHaveAttribute('href', /logitech\.com\/en-in\/shop\/p\/mx-mechanical/);
  await page.keyboard.press('Escape');
  await expect(page.locator('.product-row')).toHaveCount(before);
  await page.locator('.electronics-categories').getByRole('button', {name: /^Monitors /}).click();
  await expect(page.locator('.electronics-card')).toHaveCount(3);
  for (const card of await page.locator('.electronics-card').all()) await card.getByRole('button', {name: 'Compare', exact: true}).click();
  await expect(page.locator('.electronics-comparison table')).toContainText('1920×1080');
  await expect(page.locator('.electronics-comparison table')).toContainText('1800');
  await page.getByLabel('Search models').fill('no-such-screen');
  await expect(page.getByRole('heading', {name: 'No matching model.'})).toBeVisible();
  await page.getByRole('button', {name: 'Clear filters'}).click();
  await expect(page.locator('.electronics-card')).toHaveCount(3);
});

test('electronics replacement changes the actual plan, supports undo, and never hides owned categories', async ({page}) => {
  await page.goto('/', {waitUntil:'domcontentloaded'}); await page.getByLabel('Where you shop').selectOption('EU');
  await page.getByRole('button', {name: 'laptop', exact: true}).click();
  await page.getByRole('button', {name: 'Electronics', exact: true}).click();
  const card = page.locator('.electronics-card[data-product-id="de-mxkeys-s"]');
  await card.getByRole('button', {name: 'Details and options'}).click();
  await expect(page.getByRole('dialog')).toContainText('German QWERTZ');
  await page.getByRole('button', {name: 'Replace in my plan'}).click();
  await page.getByRole('button', {name: 'Products', exact: true}).click();
  await expect(page.locator('.board-product[data-product-id="de-mxkeys-s"]')).toHaveCount(1);
  await page.getByRole('button', {name: 'Undo', exact: true}).click();
  await expect(page.locator('.board-product[data-product-id="de-mxkeys-s"]')).toHaveCount(0);
  await page.getByRole('button', {name: 'keyboard', exact: true}).click();
  await page.getByRole('button', {name: 'Electronics', exact: true}).click();
  await expect(page.locator('.electronics-card')).toHaveCount(4);
  await card.getByRole('button', {name: 'Details and options'}).click();
  await expect(page.getByRole('dialog')).toContainText('Uncheck that equipment');
  await expect(page.getByRole('dialog').getByRole('button', {name: 'Add to my plan'})).toBeDisabled();
});

test('all regional electronics have photos and local currency links; phone and dark views remain accessible', async ({page}) => {
  await page.setViewportSize({width:390, height:844}); await page.goto('/', {waitUntil:'domcontentloaded'});
  for (const market of ['IN', 'EU', 'US']) {
    await page.getByLabel('Where you shop').selectOption(market);
    await page.getByRole('button', {name: 'Electronics', exact: true}).click();
    for (const category of ['Keyboards', 'Mice', 'Monitors']) {
      await page.locator('.electronics-categories').getByRole('button', {name:new RegExp('^' + category + ' ')}).click();
      for (const card of await page.locator('.electronics-card').all()) {
        const photo = card.locator('img'); await photo.scrollIntoViewIfNeeded();
        await expect.poll(() => photo.evaluate(el => (el as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
        await expect(card.locator('a')).toHaveAttribute('href', market === 'IN' ? /\/(en-in|in-en|in)\/|croma\.com|vplak\.com/ : market === 'EU' ? /\/de-de\// : /\/en-us\//);
      }
    }
  }
  await page.locator('.electronics-categories').getByRole('button', {name: /^Monitors /}).click();
  for (const card of await page.locator('.electronics-card').all()) await card.getByRole('button', {name: 'Compare', exact: true}).click();
  for (const width of [390, 1440]) {
    await page.setViewportSize({width, height:900});
    for (const theme of ['dark', 'light']) {
      await page.getByRole('button', {name:`Use ${theme} theme`}).click();
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
      expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
    }
  }
  if (!(process.env.TEST_BASE_URL ?? '').startsWith('https:')) {
    await page.locator('.electronics-heading').scrollIntoViewIfNeeded();
    await page.screenshot({path:'docs/screenshots/electronics.png'});
    await page.setViewportSize({width:390,height:844});
    await page.locator('.electronics-heading').scrollIntoViewIfNeeded();
    await page.screenshot({path:'docs/screenshots/electronics-mobile.png'});
  }
  await page.locator('.electronics-card').first().getByRole('button', {name: 'Details and options'}).click();
  expect((await new AxeBuilder({page}).withTags(['wcag2a','wcag2aa','wcag21aa']).analyze()).violations).toEqual([]);
  await page.keyboard.press('Escape');
});
