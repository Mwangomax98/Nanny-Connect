import { test, expect } from '@playwright/test'

test.describe('Frontend', () => {
  test('homepage loads with a WhatsApp link', async ({ page }) => {
    await page.goto('http://localhost:3000')

    await expect(page).toHaveTitle(/tai – Pride of Africa/)
    await expect(page.locator('h1').first()).toHaveText('tai')
    await expect(page.getByRole('link', { name: 'Chat on WhatsApp' })).toHaveAttribute(
      'href',
      /^https:\/\/wa\.me\/255755702121/,
    )
  })

  test('health endpoint reports ok', async ({ request }) => {
    const res = await request.get('http://localhost:3000/api/health')
    expect(res.ok()).toBe(true)
    expect(await res.json()).toEqual({ status: 'ok' })
  })
})
