import { ClientFunction, Selector } from 'testcafe';

fixture `Visit Admin Register Endpoint`
    .page `http://185.51.76.10:9888/admin/register`;

test('Login - Press Create button without providing any information', async t => {
    await t
        .click("#app > div > form > button")
        .expect(Selector("#app > div > form > div:nth-child(1) > div").innerText).eql("The Email field is required.")
        .expect(Selector("#app > div > form > div:nth-child(2) > div").innerText).eql("The Name field is required.")
        .expect(Selector("#app > div > form > div:nth-child(3) > div").innerText).eql("The Password field is required.")
        .expect(Selector("#app > div > form > div:nth-child(4) > div").innerText).eql("The PasswordConfirm field is required.")
});


test("Login - An error message is displayed if the two passwords don't match.", async t => {
    await t
        .typeText("#registerPassword", "test")
        .typeText("#registerConfirmPassword", "test123")
        .click("#app > div > form > button")
        .expect(Selector("#app > div > form > div:nth-child(4) > div").innerText).eql("Passwords do not match")
});


test("Login - When the form is filled successfully you are taken to the login-page.", async t => {
    const getLocation = ClientFunction(() => document.location.href);

    await t
        .typeText("#registerEmail", "test@test.com")
        .typeText("#registerName", "Anders")
        .typeText("#registerPassword", "testpassword")
        .typeText("#registerConfirmPassword", "testpassword")
        .click("#app > div > form > button")
        .expect(getLocation()).contains('http://185.51.76.10:9888/admin/login/?returnUrl=http%3A%2F%2F185.51.76.10%3A9888%2Fadmin');
});