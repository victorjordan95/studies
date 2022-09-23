const puppeteer = require('puppeteer');

describe('Devices test', () => {
  let browser;
  let page;

  before(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);
  });

  after(async () => {
    await browser.close();
  });

  it('Desktop device test', async function() {
    await page.setViewport({ width: 1650, height: 1050});
    await page.goto('https://example.com/');
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
    await page.reload();
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
  })

  it('Tablet device test', async function() {
    await page.emulate(puppeteer.devices['iPad landscape']);
    await page.goto('https://example.com/');
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
    await page.reload();
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
  })

  it('Mobile device test', async function() {
    await page.emulate(puppeteer.devices['iPhone X']);
    await page.goto('https://example.com/');
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
    await page.reload();
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
  })

});
