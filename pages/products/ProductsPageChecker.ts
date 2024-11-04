import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { ProductsPage } from './ProductsPage';

export class ProductsPageChecker extends BasePageChecker {
    readonly page: ProductsPage;

    constructor(page: ProductsPage) {
        super(page);
        this.page = page;
    }

    async productsPageIsVisible() {
        //at least one product should be visible
        await expect(this.page.productCard.nth(0)).toBeVisible();
    }
}