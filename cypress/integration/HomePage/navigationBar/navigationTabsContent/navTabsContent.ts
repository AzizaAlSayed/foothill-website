import HomePageActions from "@pageObjects/home/actions";
import HomePageAssertions from "@pageObjects/home/assertions";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const homePageActions = new HomePageActions();
const homePageAssertions = new HomePageAssertions();

Given("A user was on the About Us page", () => {
  homePageActions.openAboutUsTab();
});

Given("A user was on the Home page", () => {
  homePageActions.openHomeTab();
});

When("The user clicks on the Home tab on the Navigation bar", () => {
  homePageActions.clickOnHomeTabLink();
});

When("The user clicks on the About Us tab on the Navigation bar", () => {
  homePageActions.clickOnAboutUsTabLink();
});

When("The user clicks on the Careers tab on the Navigation bar", () => {
  homePageActions.clickOnCareersTabLink();
});

When("The user clicks on the Contact Us tab on the Navigation bar", () => {
  homePageActions.clickOnContactUsTabLink();
});

Then("The {string} title should be appear", (content: string) => {
  homePageAssertions.checkTitleContainsValue(content, true);
});

Then("The Our Service button should be appear", () => {
  homePageAssertions.checkOurServicesButton();
});

Then("{string} should be shown", (content: string) => {
  homePageAssertions.checkAboutUsTitleValue(content, true);
});

Then("{string} section should be appear", (content: string) => {
  homePageAssertions.checkMeetTheTeamSectionValue(content, true);
});

Then("{string} should be appear", (content: string) => {
  homePageAssertions.checkMainTitleContainsValue(content, true);
});

Then("The Search input should be shown", () => {
  homePageAssertions.checkSearchForTitleInputExistence();
});

Then("The Name input should be shown", () => {
  homePageAssertions.checkNameInputExistence();
});

Then("The Email input should be shown", () => {
  homePageAssertions.checkEmailInputExistence();
});

Then("The Phone input should be shown", () => {
  homePageAssertions.checkPhoneInputExistence();
});

Then("The Message input should be shown", () => {
  homePageAssertions.checkMessageInputExistence();
});
