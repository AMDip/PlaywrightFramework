import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { CreatedAccountPageChecker } from "./CreatedAccountPageChecker";

export class CreatedAccountPage extends BasePage {
    readonly checker: CreatedAccountPageChecker;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.checker = new CreatedAccountPageChecker(this);
    }

    get createdAccountMessage(): Locator {
        return this.page.getByText('ACCOUNT CREATED!');
    }
    get continueButton(): Locator {
        return this.page.getByRole('link', { name: 'Continue' });
    }

    async clickOnContinueButton() {
        await this.continueButton.click();
    }
}