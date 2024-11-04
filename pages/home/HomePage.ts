import { Locator, Page } from '@playwright/test';
import { BasePage } from "../base/BasePage";
import { HomePageChecker } from "./HomePageChecker";
import { ProductsPage } from '../products/ProductsPage';
import { CartPage } from '../cart/cartPage';
import { LoginPage } from '../login/LoginPage';

export class HomePage extends BasePage {
    readonly checker: HomePageChecker;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.checker = new HomePageChecker(this);
    }

    get homePageTittle(): Locator {
        return this.page.getByAltText('Website for automation practice');
    }
    get productsSection(): Locator {
        return this.page.getByRole('link', { name: 'Products' });
    }
    get cartSection(): Locator {
        return this.page.getByRole('link', { name: 'Cart' });
    }
    get logoutSection(): Locator {
        return this.page.getByRole('link', { name: 'Logout' });
    }

    async clickOnProductsSection(): Promise<ProductsPage> {
        await this.productsSection.click();
        return new ProductsPage(this.page);
    }

    async clickOnCartSection(): Promise<CartPage> {
        await this.cartSection.click();
        return new CartPage(this.page);
    }

    async clickOnLogoutSection(): Promise<LoginPage> {
        await this.logoutSection.click();
        return new LoginPage(this.page);
    }
}