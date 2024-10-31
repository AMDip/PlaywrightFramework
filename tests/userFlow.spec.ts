import { test } from './fixtures/PomFixtures';

test.describe('Feature: User Flow', () => {
    test('Inital Test  for the user flow', async ({ homePage }) => {
        await test.step('', async () => {
            await homePage.checker.homePageTittleImageIsVisible();
        })
    })
})