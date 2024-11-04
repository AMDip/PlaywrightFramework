import { expect } from '@playwright/test';
import { BasePageChecker } from "../base/BasePageChecker";
import { CreatedAccountPage } from './CreatedAccountPage';

export class CreatedAccountPageChecker extends BasePageChecker {
    readonly page: CreatedAccountPage;

    constructor(page: CreatedAccountPage){
        super(page)
        this.page = page;
    }

    async createdAccountMessageIsVisible() {
        await expect(this.page.createdAccountMessage).toBeVisible();
    }
}