import { Locator, Page } from '@playwright/test';
import { BasePage } from "../base/BasePage";
import { HomePageChecker } from "./HomePageChecker";

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
}