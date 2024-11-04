import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { CartPage } from './cartPage';

export class CartPageChecker extends BasePageChecker {
    readonly page: CartPage;

    constructor(page: CartPage){
        super(page)
        this.page = page;
    }

    async cartPageIsVisible() {
        await expect(this.page.cartInfoTable).toBeVisible();
    }

    async verifyProductQuantity(quantity: number) {
        await expect(await this.page.cartQuantity.locator('button').innerText()).toBe(quantity.toString());
    }

    async registerLoginModalIsVisible() {
        await expect(this.page.registerLoginModal).toBeVisible();
    }
}