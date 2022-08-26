class HomePageAssertions {
  checkTabContainsValue(value: string, path: string, isContain: boolean) {
    cy.get("a[href='" + path + "']").should(
      isContain ? "contain" : "not.contain",
      value
    );
  }

  checkTitleContainsValue(value: string, isContain: boolean) {
    cy.get(".title").should(isContain ? "contain" : "not.contain", value);
  }

  checkAboutUsTitleValue(value: string, isContain: boolean) {
    cy.get(".AboutTitle").should(isContain ? "contain" : "not.contain", value);
  }

  checkMeetTheTeamSectionValue(value: string, isContain: boolean) {
    cy.get(".section-title").should(
      isContain ? "contain" : "not.contain",
      value
    );
  }

  checkMainTitleContainsValue(value: string, isContain: boolean) {
    cy.get(".main-title").should(isContain ? "contain" : "not.contain", value);
  }

  checkSearchForTitleInputExistence(isContain = true) {
    cy.get("#career-search").should(isContain ? "exist" : "not.exist");
  }
  checkNameInputExistence(isContain = true) {
    cy.get("#name").should(isContain ? "exist" : "not.exist");
  }

  checkEmailInputExistence(isContain = true) {
    cy.get("#email").should(isContain ? "exist" : "not.exist");
  }

  checkPhoneInputExistence(isContain = true) {
    cy.get("#phone").should(isContain ? "exist" : "not.exist");
  }

  checkMessageInputExistence(isContain = true) {
    cy.get("#message").should(isContain ? "exist" : "not.exist");
  }

  checkOurServicesButton(isContain = true) {
    cy.get("button").should(isContain ? "exist" : "not.exist");
  }
}

export default HomePageAssertions;
