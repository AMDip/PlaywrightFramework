import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { LoginPageChecker } from "./LoginPageChecker";
import { SignUpPage } from "../signup/SignUpPage";

export class LoginPage extends BasePage {
    readonly checker: LoginPageChecker;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.checker = new LoginPageChecker(this);
    }

    get loginTittle(): Locator {
        return this.page.getByText('Login to your account');
    }
    get signUpTittle(): Locator {
        return this.page.getByText('New User Signup!');
    }
    get signUpNameInput(): Locator {
        return this.page.locator('[data-qa="signup-name"]')
    }
    get signUpEmailInput(): Locator {
        return this.page.locator('[data-qa="signup-email"]')
    }
    get signUpButton(): Locator {
        return this.page.locator('[data-qa="signup-button"]')
    }

    async typeSignUpName(name: string) {
        await this.signUpNameInput.fill(name);
    }

    async typeSignUpEmail(email: string) {
        await this.signUpEmailInput.fill(email);
    }

    async clickOnSignUpButton(): Promise<SignUpPage> {
        await this.signUpButton.click();
        return new SignUpPage(this.page);
    }
}