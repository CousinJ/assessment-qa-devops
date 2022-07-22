
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('clikcing draw shows choices to pick from', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await driver.sleep(1000)
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)
})

test('adding to a duo', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await driver.sleep(1000)
    await draw.click()
    const choices = await driver.findElement(By.id('choices'))
    const displayed = await choices.isDisplayed()
    expect(displayed).toBe(true)

    const addDuo = await driver.findElement(By.className('bot-btn'))
    await driver.sleep(1000)
    await addDuo.click()
    const playerDuo = await driver.findElement(By.id('player-duo'))
    const displayed2 = await playerDuo.isDisplayed()
    expect(displayed2).toBe(true)
})