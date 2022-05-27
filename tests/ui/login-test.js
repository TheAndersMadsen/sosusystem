import {
    ClientFunction,
    Selector
} from 'testcafe';

fixture `Visit Admin Login Endpoint`
    .page `http://185.51.76.10:61002/#/login`;

test("Login - You won't be redirected if account doesn't exist.", async t => {
    await t
        .typeText("#username", "anders")
        .typeText("#password", "meme")
        .takeScreenshot()
        .click("#loginButton")
    	.expect(getLocation()).contains('http://185.51.76.10:61002/#/dashboard')
        .takeScreenshot()
});
