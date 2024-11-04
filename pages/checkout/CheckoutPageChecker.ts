import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { CheckoutPage } from './CheckoutPage';

export class CheckoutPageChecker extends BasePageChecker {
    readonly page: CheckoutPage;

    constructor(page: CheckoutPage) {
        super(page);
        this.page = page;
    }

    async checkoutPageIsVisible() {
        await expect(this.page.reviewOrderSection).toBeVisible();
    }
}