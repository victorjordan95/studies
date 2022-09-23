const puppeteer = require('puppeteer');
const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend ({ toMatchImageSnapshot });

describe('Visual tests', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
      slowMo: 100,
      args: ['--window-size=1920,1080'],
    });
    page = await browser.newPage();
    await page.goto('https://www.example.com');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Full Page Snapshot', async () => {
    await page.goto('https://www.example.com');
    await page.waitForSelector('h1');
    const image = await page.screenshot();
    expect(image).toMatchImageSnapshot({
      failureThreshold: 500,
      failureThresholdType: 'pixel', // pixel or percentage - default is percentage
    });
  });
});