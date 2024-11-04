import { expect } from "@playwright/test";
import { BasePageChecker } from "../base/BasePageChecker";
import { SignUpPage } from "./SignUpPage";

export class SignUpPageChecker extends BasePageChecker {
    readonly page: SignUpPage;

    constructor(page: SignUpPage) {
        super(page);
        this.page = page;
    }

    async signUpPageIsVisible() {
        await expect(this.page.accountInfoTittle).toBeVisible();
    }
}