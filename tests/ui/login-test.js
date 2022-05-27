import {
    ClientFunction,
    Selector
} from 'testcafe';

fixture `Visit Admin Login Endpoint`
    .page `http://185.51.76.10:61002/#/login`;

test("Login - You won't be redirected if account doesn't exist.", async t => {
    await t
        .typeText("#form2Example17", "anders")
        .typeText("#form2Example27", "meme")
        .takeScreenshot()
        .click("#app > div > form > button")
        .expect(Selector("#app > div > div").innerText).eql("Login failed, please try again.")
        .takeScreenshot()
});


test("Login - You are taken to the dashboard if you provide correct credentials.", async t => {
    const getLocation = ClientFunction(() => document.location.href);

    await t
        .typeText("#loginEmail", "test@gmail.com")
        .typeText("#loginPassword", "testpassword")
        .click("#app > div > form > button")
    	.expect(getLocation()).contains('http://185.51.76.10:9888/admin/')
        .takeScreenshot()
});
