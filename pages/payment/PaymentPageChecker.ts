import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { PaymentPage } from './PaymentPage';

export class PaymentPageChecker extends BasePageChecker {
    readonly page: PaymentPage;

    constructor(page: PaymentPage){
        super(page)
        this.page = page;
    }

    async paymentPageIsVisible() {
        await expect(this.page.paymentSection).toBeVisible();
    }

    async orderPlacedMessageIsVisible() {
        await expect(this.page.orderPlacedMessage).toBeVisible();
    }
}