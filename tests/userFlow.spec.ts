import { test } from './fixtures/PomFixtures';
import { faker } from '@faker-js/faker';
import { ProductsPage } from '../pages/products/ProductsPage';
import { ProductDetailsPage } from '../pages/product-details/ProductDetailsPage';
import { CartPage } from '../pages/cart/cartPage';
import { LoginPage } from '../pages/login/LoginPage';
import { SignUpPage } from '../pages/signup/SignUpPage';
import { CreatedAccountPage } from '../pages/created-account/CreatedAccountPage';
import { PaymentPage } from '../pages/payment/PaymentPage';
import { CheckoutPage } from '../pages/checkout/CheckoutPage';

test.describe('Feature: User Flow', () => {
    let productsPage: ProductsPage;
    let productDetailsPage: ProductDetailsPage;
    let cartPage: CartPage;
    let loginPage: LoginPage;
    let signUpPage: SignUpPage;
    let createdAccountPage: CreatedAccountPage;
    let checkoutPage: CheckoutPage;
    let paymentPage: PaymentPage;

    const RANDOM_NUMBER = faker.number.int({ min: 1, max: 20 });
    const SIGNUP_NAME = faker.person.fullName();
    const SIGNUP_EMAIL = faker.internet.email();

    test('E2E user flow', async ({ homePage }) => {
        await test.step('Given that Im on the landing page', async () => {
            await homePage.checker.homePageTittleImageIsVisible();
        })
        await test.step('When I click to the products section', async () => {
            productsPage = await homePage.clickOnProductsSection();
        })
        await test.step('Then I should see the products section', async () => {
            await productsPage.checker.productsPageIsVisible();
        })
        await test.step('When I click con the third product view button', async () => {
            productDetailsPage = await productsPage.clickOnViewProductDetailsByNumber(3);
        })
        await test.step('Then I should see the products details', async () => {
            await productDetailsPage.checker.productDetailsPageIsVisible();
        })
        await test.step('When I change the items quantity', async () => {
            await productDetailsPage.changeItemQuantityByNumber(RANDOM_NUMBER);
        })
        await test.step('And I click on the Add to cart button', async () => {
            await productDetailsPage.clickOnAddToCartButton();
        })
        await test.step('Then I should see a confirmation modal', async () => {
            await productDetailsPage.checker.confirmationModalIsVisible();
        })
        await test.step('When I click on view cart link on confirmation modal', async () => {
            cartPage = await productDetailsPage.clickOnViewCartLink();
        })
        await test.step('Then I should see the product and quantity on the cart', async () => {
            await cartPage.checker.cartPageIsVisible();
            //await cartPage.checker.verifyProductName(productName);
            await cartPage.checker.verifyProductQuantity(RANDOM_NUMBER);
        })
        await test.step('When I click on the checkout button', async () => {
            await cartPage.clickOnCheckoutButton();
        })
        await test.step('Then I should see the register login modal', async () => {
            await cartPage.checker.registerLoginModalIsVisible();
        })
        await test.step('When I click on the register login link', async () => {
            loginPage = await cartPage.clickOnRegisterLoginLink();
        })
        await test.step('Then I should see the register login page', async () => {
            await loginPage.checker.loginPageIsVisible();
            await loginPage.checker.signUpPageIsVisible();
        })
        await test.step('When I type name and email', async () => {
            await loginPage.typeSignUpName(SIGNUP_NAME);
            await loginPage.typeSignUpEmail(SIGNUP_EMAIL);
        })
        await test.step('And click on the signup button', async () => {
            signUpPage = await loginPage.clickOnSignUpButton();
        })
        await test.step('Then I should see the signup page', async () => {
            await signUpPage.checker.signUpPageIsVisible();
        })
        await test.step('When I enter all required information', async () => {
            await signUpPage.fillOutSignUpForm();
        })
        await test.step('And click on the create account button', async () => {
            createdAccountPage = await signUpPage.clickOnCreateAccountButton();
        })
        await test.step('Then I should see the account created page', async () => {
            await createdAccountPage.checker.createdAccountMessageIsVisible();
        })
        await test.step('When I click on the continue button', async () => {
            await createdAccountPage.clickOnContinueButton();
        })
        await test.step('Then I should see the home page', async () => {
            await homePage.checker.homePageTittleImageIsVisible();
        })
        await test.step('When I click on the cart section', async () => {
            await homePage.clickOnCartSection();
        })
        await test.step('Then I should see the cart page', async () => {
            await cartPage.checker.cartPageIsVisible();
        })
        await test.step('When I click on proceed to checkout button', async () => {
            checkoutPage = await cartPage.clickOnCheckoutButton();
        })
        await test.step('Then I should see the checkout page', async () => {
            await checkoutPage.checker.checkoutPageIsVisible();
        })
        await test.step('When I click on place your order button', async () => {
            paymentPage = await checkoutPage.clickOnPlaceOrderButton();
        })
        await test.step('Then the payment page should be visible', async () => {
            await paymentPage.checker.paymentPageIsVisible();
        })
        await test.step('When I fill out the payment data', async () => {
            await paymentPage.fillOutPaymentData();
        })
        await test.step('And I click on the pay and confirm button', async () => {
            await paymentPage.clickOnPayAndConfirmButton();
        })
        await test.step('Then I should see a message saying the order has been placed', async () => {
            await paymentPage.checker.orderPlacedMessageIsVisible();
        })
        await test.step('When I click on the continue button', async () => {
            await paymentPage.clickOnContinueButton();
        })
        await test.step('Then I should the home page', async () => {
            await homePage.checker.homePageTittleImageIsVisible();
        })
        await test.step('When I on the logout section', async () => {
            await homePage.clickOnLogoutSection();
        })
        await test.step('Then I should see the login form visible again', async () => {
            await loginPage.checker.loginPageIsVisible();
        })
    })
})