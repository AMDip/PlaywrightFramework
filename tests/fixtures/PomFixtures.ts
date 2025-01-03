import { test as base } from '@playwright/test';
import { HomePage } from '../../pages/home/HomePage';
import { Env } from '../../tests/utils/Environment';

type pages = {
    homePage: HomePage;
}

export const test = base.extend<pages>({
    homePage: async ({ page }, use) => {
        let homePage: HomePage;
        await page.goto(Env.BASE_URL);
        homePage = new HomePage(page);
        await use(homePage);
    }
});