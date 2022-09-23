const puppeteer = require('puppeteer')
const expect = require('chai').expect

const { click, shouldNotExist, getText, getCount } = require('../lib/helpers')

describe('My first puppeteer test', () => {
	let browser
	let page

	before(async () => {
		browser = await puppeteer.launch({ headless: false })
		const context = await browser.createIncognitoBrowserContext()
		page = await context.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after(async () => {
		await browser.close()
	})

	it('should be able to open a page', async () => {
		await page.goto('https://example.com/')

		await page.waitForTimeout(1000)
		await page.waitForSelector('h1')
		await page.reload()
		await page.waitForTimeout(1000)
		await page.waitForSelector('h1')
	})

	it('should be able to open a page go to devtool and back', async () => {
		await page.goto('https://www.google.com/')
		await page.waitForTimeout(1000)
		await page.goto('http://example.com')
		await page.waitForTimeout(1000)
		page.goBack()
		await page.waitForTimeout(1000)
		page.goForward()
		await page.waitForTimeout(1000)
	})

	it('should input values in inputs', async () => {
		await page.goto('https://devexpress.github.io/testcafe/example/')
		await page.waitForTimeout(1000)
		await page.type('#developer-name', 'John Smith')
		await page.click('#tried-test-cafe', { clickCount: 1 })
		await page.select('#preferred-interface', 'JavaScript API')
		await page.type('#comments', "It's my pleasure!")
		await click(page, '#submit-button')
		await page.waitForSelector('.result-content')
	})

	it('should be able to open a page and h1 be example domain', async () => {
		await page.goto('http://example.com/')
		await page.waitForTimeout(1000)
		const title = await page.title()
		const url = await page.url()
		const text = await getText(page, 'h1')
		const count = await getCount(page, 'p')

		expect(title).to.be.a('string', 'Example Domain')
		expect(url).to.include('example.com')
		expect(text).to.be.a('string', 'Example Domain')
		expect(count).to.equal(2)
	})

	it('should be able to open webappsecurity and press enter', async () => {
		await page.goto('http://zero.webappsecurity.com/')
		await page.waitForTimeout(1000)
		await page.waitForSelector('#searchTerm')
		await page.type('#searchTerm', 'Hellow World')
		await page.keyboard.press('Enter', { delay: 10 })
		await page.waitForTimeout(1000)

		await click(page, '#signin_button')
		await page.waitForTimeout(2000)
		await shouldNotExist(page, '#signin_button')
	})
})
