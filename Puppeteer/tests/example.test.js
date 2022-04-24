const puppeteer = require('puppeteer');

describe('My first puppeteer test', () => { 
  it('should be able to open a page', async () => {

    const browser = await puppeteer.launch({ 
      headless: true, // will open a browser window, if true will not
      slowMo: 0, // slow down the browser by 10ms
      devtools: true // open devtools
    });

    const page = await browser.newPage();
    await page.goto('https://example.com/');

    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');
    await page.reload();
    await page.waitForTimeout(1000);
    await page.waitForSelector('h1');

    await browser.close();
  });

  it('should be able to open a page go to devtool and back', async () => {

    const browser = await puppeteer.launch({ 
      headless: true, // will open a browser window, if true will not
      slowMo: 10, // slow down the browser by 10ms
      devtools: false // open devtools
    });

    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    await page.goto('http://example.com')
    await page.waitForTimeout(3000)
    page.goBack()
    await page.waitForTimeout(3000)
    page.goForward()
    await page.waitForTimeout(3000)

    await browser.close()
  });

  it('should be able to open a page go to devtool and back', async () => {

    const browser = await puppeteer.launch({ 
      headless: true, // will open a browser window, if true will not
      slowMo: 10, // slow down the browser by 10ms
      devtools: false // open devtools
    });

    const page = await browser.newPage()
    await page.goto('https://www.google.com/')
    await page.waitForTimeout(3000)
    await page.goto('http://example.com')
    await page.waitForTimeout(3000)
    page.goBack()
    await page.waitForTimeout(3000)
    page.goForward()
    await page.waitForTimeout(3000)
    
    await browser.close()
  });

  it('should be able to open a page', async () => {

    const browser = await puppeteer.launch({ 
      headless: false, 
      slowMo: 10, 
      devtools: true 
    });

    const page = await browser.newPage();
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.type('#developer-name', 'John Smith');
    await page.click('#tried-test-cafe', { clickCount: 1 });
    await page.select('#preferred-interface', 'JavaScript API');

    await page.waitForTimeout(5000);
    await browser.close();
  });
})