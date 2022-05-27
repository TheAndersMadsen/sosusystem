import {
    ClientFunction,
    Selector
} from 'testcafe';

fixture `Visit Admin Login Endpoint`
    .page `http://185.51.76.10:61002/#/login`;

test("Login - check if it works.", async t => {
    const getLocation = ClientFunction(() => document.location.href);
    await t
        .typeText("#username", "anders")
        .typeText("#password", "meme")
        .takeScreenshot()
        .click("#loginButton")
    	.expect(getLocation()).contains('http://185.51.76.10:61002/#/dashboard')
        .takeScreenshot()
});

test("Login - check if it doesn't login with incorrect password", async t => {
    const getLocation = ClientFunction(() => document.location.href);
    await t
        .typeText("#username", "ullabulla")
        .typeText("#password", "1234")
        .takeScreenshot()
        .click("#loginButton")
    	.expect(getLocation()).contains('http://185.51.76.10:61002/#/')
        .takeScreenshot()
});

