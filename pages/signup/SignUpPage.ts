import { Locator, Page } from "@playwright/test";
import { faker } from "@faker-js/faker";
import { BasePage } from "../base/BasePage";
import { CreatedAccountPage } from "../created-account/CreatedAccountPage";
import { SignUpPageChecker } from "./SignUpPageChecker";

export class SignUpPage extends BasePage {
    readonly checker: SignUpPageChecker;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.checker = new SignUpPageChecker(this);
    }

    get accountInfoTittle(): Locator {
        return this.page.getByText('Enter Account Information');
    }
    get passwordInput(): Locator {
        return this.page.locator('#password');
    }
    get daysDropDown(): Locator {
        return this.page.locator('#days');
    }
    get monthssDropDown(): Locator {
        return this.page.locator('#months');
    }
    get yearsDropDown(): Locator {
        return this.page.locator('#years');
    }
    get firstNameInput(): Locator {
        return this.page.locator('#first_name');
    }
    get lastNameInput(): Locator {
        return this.page.locator('#last_name');
    }
    get addressInput(): Locator {
        return this.page.locator('#address1');
    }
    get countrydropDown(): Locator {
        return this.page.locator('#country');
    }
    get stateInput(): Locator {
        return this.page.locator('#state');
    }
    get cityInput(): Locator {
        return this.page.locator('#city');
    }
    get zipCodeInput(): Locator {
        return this.page.locator('#zipcode');
    }
    get mobileNumberInput(): Locator {
        return this.page.locator('#mobile_number');
    }
    get createAccountButton(): Locator {
        return this.page.getByText('Create Account');
    }

    async fillOutSignUpForm() {
        const PASSWORD = faker.internet.password();
        const DAY = faker.number.int({ min: 0, max: 30});
        const MONTH = faker.number.int({ min: 0, max: 11});
        const YEAR = faker.number.int({ min: 0, max: 120});
        const FIRST_NAME = faker.person.firstName();
        const LAST_NAME = faker.person.lastName();
        const ADDRESS = faker.location.streetAddress();
        const COUNTRY_INDEX = faker.number.int({ min: 0, max: 6});
        const STATE = faker.location.state();
        const CITY = faker.location.city();
        const ZIPCODE = faker.location.zipCode();
        const MOBILE_NUMBER = faker.phone.number();

        await this.typePassword(PASSWORD);
        await this.setDateFromDropDown(DAY, MONTH, YEAR);
        await this.typeFirstName(FIRST_NAME);
        await this.typeLastName(LAST_NAME);
        await this.typeAddress(ADDRESS);
        await this.setCountryFromDropDown(COUNTRY_INDEX);
        await this.typeState(STATE);
        await this.typeCity(CITY);
        await this.typeZipCode(ZIPCODE);
        await this.typeMobileNumber(MOBILE_NUMBER);
    }

    async typePassword(password: string) {
        await this.passwordInput.fill(password);
    }

    async setDateFromDropDown(day: number, month: number, year: number) {
        await this.daysDropDown.selectOption({ index: day});
        await this.monthssDropDown.selectOption({ index: month});
        await this.yearsDropDown.selectOption({ index: year});
    }

    async typeFirstName(firstName: string) {
        await this.firstNameInput.fill(firstName);
    }

    async typeLastName(lastName: string) {
        await this.lastNameInput.fill(lastName);
    }

    async typeAddress(address: string) {
        await this.addressInput.fill(address);
    }

    async setCountryFromDropDown(index: number) {
        await this.countrydropDown.selectOption({ index: index});
    }

    async typeState(state: string) {
        await this.stateInput.fill(state);
    }

    async typeCity(city: string) {
        await this.cityInput.fill(city);
    }

    async typeZipCode(zipCode: string) {
        await this.zipCodeInput.fill(zipCode);
    }

    async typeMobileNumber(mobileNumber: string) {
        await this.mobileNumberInput.fill(mobileNumber);
    }

    async clickOnCreateAccountButton(): Promise<CreatedAccountPage> {
        await this.createAccountButton.click();
        return new CreatedAccountPage(this.page);
    }
}