module.exports = {
	click: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			await page.click(selector)
		} catch (error) {
			throw new Error(`Could not click on selector: ${selector}`)
		}
	},
	getText: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$eval(selector, el => el.textContent)
		} catch (error) {
			throw new Error(`Could not get text from selector: ${selector}`)
		}
	},
	getCount: async function (page, selector) {
		try {
			await page.waitForSelector(selector)
			return await page.$$eval(selector, el => el.length)
		} catch (error) {
			throw new Error(`Could not get count from selector: ${selector}`)
		}
	},
	typeText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.type(selector, text)
		} catch (error) {
			throw new Error(`Could not type text: ${text} into selector: ${selector}`)
		}
	},
	waitForText: async function (page, selector, text) {
		try {
			await page.waitForSelector(selector)
			await page.waitForFunction((selector, text) => {
				document.querySelector(selector).innerText.includes(text),
					{},
					selector,
					text
			})
		} catch (error) {
			throw new Error(
				`Could not wait for text: ${text} in selector: ${selector}`
			)
		}
	},
	shouldNotExist: async function (page, selector) {
		try {
			await page.waitForSelector(selector, { hidden: true })
		} catch (error) {
			throw new Error(`Could not wait for selector: ${selector} to not exist`)
		}
	},
}
