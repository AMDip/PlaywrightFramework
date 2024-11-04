import { expect } from "@playwright/test";
import { BasePageChecker } from "../base/BasePageChecker";
import { LoginPage } from "./LoginPage";

export class LoginPageChecker extends BasePageChecker {
    readonly page: LoginPage;

    constructor(page: LoginPage) {
        super(page)
        this.page = page;
    }

    async loginPageIsVisible() {
        await expect(this.page.loginTittle).toBeVisible();
    }

    async signUpPageIsVisible() {
        await expect(this.page.signUpTittle).toBeVisible();
    }
}