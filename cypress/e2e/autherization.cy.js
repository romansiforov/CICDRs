import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";
import user from "../fixtures/user.json";

it('Authorization', () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton();
  loginPage.submitLoginForm(user.username, user.password);

})