const { expect } = require('chai')
const puppeteer = require('puppeteer')
const { click, typeText } = require('../../lib/helpers')

describe('Login test', () => {
	let browser
	let page

	before(async () => {
		browser = await puppeteer.launch({
			headless: false,
			slowMo: 0,
			devtools: false,
		})
		page = await browser.newPage()
		await page.setDefaultTimeout(10000)
		await page.setDefaultNavigationTimeout(20000)
	})

	after(async () => {
		await browser.close()
	})

	it('Display feedback form', async () => {
		await page.goto('http://zero.webappsecurity.com/index.html')
		await click(page, '#feedback')
	})

	it('submit feedback form', async () => {
		await typeText(page, '#name', 'Name')
		await typeText(page, '#email', 'email@test.com')
		await typeText(page, '#subject', 'Subject text')
		await typeText(page, '#comment', 'Comment text')

		await click(page, 'input[type="submit"]')
	})

	it('display results page', async () => {
		await page.waitForSelector('#feedback-title')
		const url = await page.url()
		console.log(url)
		expect(url).to.include('/sendFeedback.html')
	})
})
