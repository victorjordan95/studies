const puppeteer = require('puppeteer');
const expect = require('chai').expect;

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
    await page.waitForTimeout(1000)
    await page.goto('http://example.com')
    await page.waitForTimeout(1000)
    page.goBack()
    await page.waitForTimeout(1000)
    page.goForward()
    await page.waitForTimeout(1000)

    await browser.close()
  });

  it('should input values in inputs', async () => {

    const browser = await puppeteer.launch({ 
      headless: true, 
    });

    const page = await browser.newPage();
    await page.goto('https://devexpress.github.io/testcafe/example/');
    await page.type('#developer-name', 'John Smith');
    await page.click('#tried-test-cafe', { clickCount: 1 });
    await page.select('#preferred-interface', 'JavaScript API');
    await page.type('#comments', 'It\'s my pleasure!');
    await page.click('#submit-button');
    await page.waitForSelector('.result-content');
    await browser.close();
  });

  it('should be able to open a page and h1 be example domain', async () => {

    const browser = await puppeteer.launch({ 
      headless: true,
      slowMo: 10,
    });
    const page = await browser.newPage();
    await page.setDefaultTimeout(10000);
    await page.setDefaultNavigationTimeout(20000);

    await page.goto('http://example.com/');
    const title = await page.title();
    const url = await page.url();
    const text = await page.$eval('h1', el => el.textContent);
    const count = await page.$$eval('p', el => el.length); // when use $$ is about multiple elements

    expect(title).to.be.a('string', 'Example Domain');
    expect(url).to.include('example.com');
    expect(text).to.be.a('string', 'Example Domain');
    expect(count).to.equal(2);
  
    await browser.close();
  });

  it('should be able to open webappsecurity and press enter', async () => {
      
      const browser = await puppeteer.launch({ 
        headless: false,
        slowMo: 10,
      });
      const page = await browser.newPage();
      await page.setDefaultTimeout(10000);
      await page.setDefaultNavigationTimeout(20000);
  
      await page.goto('http://zero.webappsecurity.com/');
      await page.waitForSelector('#searchTerm');
      await page.type('#searchTerm', 'Hellow World');
      await page.keyboard.press('Enter', { delay: 10 });
      await page.waitForTimeout(5000);

      // Check if loggin button disapear
      // await page.waitForSelector('#signin_button');
      // await page.click('#signin_button');
      // await page.waitForSelector(() => !document.querySelector('#signin_button'));
      // await page.waitForSelector('#signout_button', { hidden: true, timeout: 3000 });

      await browser.close();
    });
})