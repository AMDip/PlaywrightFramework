import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { CheckoutPageChecker } from "./CheckoutPageChecker";
import { PaymentPage } from "../payment/PaymentPage";

export class CheckoutPage extends BasePage {
    readonly checker: CheckoutPageChecker;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.checker = new CheckoutPageChecker(this);
    }

    get reviewOrderSection(): Locator {
        return this.page.getByText('Review Your Order');
    }
    get placeOrderButton(): Locator {
        return this.page.getByRole('link', { name: 'Place Order' });
    }

    async clickOnPlaceOrderButton(): Promise<PaymentPage> {
        await this.placeOrderButton.click();
        return new PaymentPage(this.page);
    }
}