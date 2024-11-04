import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { ProductDetailsPage } from './ProductDetailsPage';

export class ProductDetailsChecker extends BasePageChecker {
    readonly page: ProductDetailsPage;

    constructor(page: ProductDetailsPage) {
        super(page);
        this.page = page;
    }

    async productDetailsPageIsVisible() {
        await expect(this.page.productDetailsCard).toBeVisible();
    }

    async confirmationModalIsVisible() {
        await expect(this.page.confirmationModal).toBeVisible();
    }
}