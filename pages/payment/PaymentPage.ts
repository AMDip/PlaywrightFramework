import { Locator, Page } from "@playwright/test";
import { BasePage } from "../base/BasePage";
import { PaymentPageChecker } from "./PaymentPageChecker";
import { faker } from "@faker-js/faker";

export class PaymentPage extends BasePage {
    readonly checker: PaymentPageChecker;

    constructor(page: Page) {
        super(page)
        this.page = page;
        this.checker = new PaymentPageChecker(this);
    }

    get paymentSection(): Locator {
        return this.page.getByRole('heading', { name: 'Payment' })
    }
    get nameOnCardInput(): Locator {
        return this.page.locator('[data-qa="name-on-card"]');
    }
    get cardNumberInput(): Locator {
        return this.page.locator('[data-qa="card-number"]');
    }
    get cvcInput(): Locator {
        return this.page.locator('[data-qa="cvc"]');
    }
    get expirationMonthInput(): Locator {
        return this.page.locator('[data-qa="expiry-month"]');
    }
    get expirationYearInput(): Locator {
        return this.page.locator('[data-qa="expiry-year"]');
    }
    get payAndConfirmButtom(): Locator {
        return this.page.locator('#submit');
    }
    get continueButton(): Locator {
        return this.page.getByRole('link', { name: 'Continue' });
    }
    get orderPlacedMessage(): Locator {
        return this.page.getByText('Order Placed!');
    }

    async clickOnPayAndConfirmButton() {
        await this.payAndConfirmButtom.click();
    }

    async clickOnContinueButton() {
        await this.continueButton.click();
    }

    async fillOutPaymentData() {
        const CARD_NAME = faker.person.fullName();
        const CARD_NUMBER = faker.finance.creditCardNumber();
        const CARD_CVC = faker.finance.creditCardCVV();
        const EXP_MONTH = faker.number.int({ min: 10, max: 12 }).toString();
        const EXP_YEAR= faker.number.int({ min: 2025, max: 2030 }).toString();

        await this.typeNameOnCard(CARD_NAME);
        await this.typeCardNumberCard(CARD_NUMBER);
        await this.typeCvc(CARD_CVC);
        await this.typeExpMonth(EXP_MONTH);
        await this.typeExpYear(EXP_YEAR);
    }

    async typeNameOnCard(nameOnCard: string) {
        await this.nameOnCardInput.fill(nameOnCard);
    }

    async typeCardNumberCard(cardNumber: string) {
        await this.cardNumberInput.fill(cardNumber);
    }

    async typeCvc(cvc: string) {
        await this.cvcInput.fill(cvc);
    }

    async typeExpMonth(month: string) {
        await this.expirationMonthInput.fill(month);
    }

    async typeExpYear(year: string) {
        await this.expirationYearInput.fill(year);
    }
}