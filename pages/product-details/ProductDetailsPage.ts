import { Locator, Page } from '@playwright/test';
import { BasePage } from "../base/BasePage";
import { ProductDetailsChecker } from "./ProductDetailsPageChecker";
import { CartPage } from '../cart/cartPage';

export class ProductDetailsPage extends BasePage {
    readonly checker: ProductDetailsChecker;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.checker = new ProductDetailsChecker(this);
    }

    get productDetailsCard(): Locator {
        return this.page.locator('.product-details');
    }
    get quantityInput(): Locator {
        return this.page.locator('#quantity');
    }
    get addToCartButton(): Locator {
        return this.page.getByText('Add to cart');
    }
    get confirmationModal(): Locator {
        return this.page.getByText('Your product has been added to cart.');
    }
    get viewCartLink(): Locator {
        return this.page.getByText('View Cart');
    }

    async changeItemQuantityByNumber(number: number) {
        await this.quantityInput.fill('');
        await this.quantityInput.fill(number.toString());
    }

    async clickOnAddToCartButton() {
        await this.addToCartButton.click();
    }

    async clickOnViewCartLink(): Promise<CartPage> {
        await this.viewCartLink.click();
        return new CartPage(this.page);
    }
}