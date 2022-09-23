const puppeteer = require('puppeteer')
const { click } = require('../../lib/helpers')

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

	it('Login Test - Invalid credentials', async () => {
		await page.goto('http://zero.webappsecurity.com/login.html')
		await page.waitForSelector('#login_form')

		await page.type('#user_login', 'wrong')
		await page.type('#user_password', 'wrong')
		await click(page, '#user_remember_me')

		await click(page, 'input[type="submit"]')
		await page.waitForSelector('.alert_error')
	})

	it('Login Test - valid credentials', async () => {
		await page.goto('http://zero.webappsecurity.com/login.html')
		await page.waitForSelector('#login_form')

		await page.type('#user_login', 'username')
		await page.type('#user_password', 'password')
		await click(page, '#user_remember_me')

		await click(page, 'input[type="submit"]')
		await page.waitForSelector('#settingsBox')
	})
})
