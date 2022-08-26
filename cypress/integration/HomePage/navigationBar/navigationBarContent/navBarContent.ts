import HomePageActions from "@pageObjects/home/actions";
import HomePageAssertions from "@pageObjects/home/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const homePageAssertions = new HomePageAssertions();

Given("A user was on the About Us page", () => {
  homePageActions.openAboutUsTab();
});

Given("A user was on the Careers page", () => {
  homePageActions.openCareersTab();
});

Given("A user was on the Contact Us page", () => {
  homePageActions.clickOnContactUsTabLink();
});

Given("A user was on the Home page", () => {
  homePageActions.openHomeTab();
});

When("The user looks at the Navigation bar", () => {});

Then("The Home tab should be included in the bar", () => {
  homePageAssertions.checkTabContainsValue("Home", "/", true);
});

Then("The About Us should be included in the bar", () => {
  homePageAssertions.checkTabContainsValue("About Us", "/about", true);
});

Then("The Careers should be included in the bar", () => {
  homePageAssertions.checkTabContainsValue("Careers", "/careers", true);
});

Then("The Contact Us should be included in the bar", () => {
  homePageAssertions.checkTabContainsValue("Contact Us", "/contactus", true);
});
