import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { CartPageChecker } from "./cartPageChecker";
import { LoginPage } from "../login/LoginPage";
import { CheckoutPage } from "../checkout/CheckoutPage";

export class CartPage extends BasePage {
    readonly checker: CartPageChecker;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.checker = new CartPageChecker(this)
    }

    get cartInfoTable(): Locator {
        return this.page.locator('#cart_info_table');
    }
    get cartQuantity(): Locator {
        return this.page.locator('.cart_quantity');
    }
    get checkoutButton(): Locator {
        return this.page.getByText('Proceed To Checkout');
    }
    get registerLoginModal(): Locator {
        return this.page.getByText('Register / Login account to proceed on checkout.');
    }
    get registerLoginLink(): Locator {
        return this.page.getByRole('link', { name: 'Register / Login' });
    }

    async clickOnCheckoutButton(): Promise<CheckoutPage> {
        await this.checkoutButton.click();
        return new CheckoutPage(this.page);
    }

    async clickOnRegisterLoginLink(): Promise<LoginPage> {
        await this.registerLoginLink.click();
        return new LoginPage(this.page);
    }
}