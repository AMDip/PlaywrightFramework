import { Locator, Page } from '@playwright/test';
import { BasePage } from "../base/BasePage";
import { ProductsPageChecker } from "./ProductsPageChecker";
import { ProductDetailsPage } from '../product-details/ProductDetailsPage';

export class ProductsPage extends BasePage {
    readonly checker: ProductsPageChecker;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.checker = new ProductsPageChecker(this);
    }

    get productCard(): Locator {
        return this.page.locator('.single-products');
    }
    get productsCardList(): Locator {
        return this.page.locator('.product-image-wrapper');
    }
    
    async clickOnViewProductDetailsByNumber(productNumber: number): Promise<ProductDetailsPage> {
        await this.productsCardList.nth(productNumber).getByText('View Product').click();
        return new ProductDetailsPage(this.page);
    }
}