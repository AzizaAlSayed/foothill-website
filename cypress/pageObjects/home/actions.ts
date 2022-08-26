class HomePageActions {
  openHomeTab() {
    cy.visit("/");
    return this;
  }

  openAboutUsTab() {
    cy.visit("/about");
    return this;
  }

  openContactUsTab() {
    cy.visit("/contactus");
    return this;
  }

  openCareersTab() {
    cy.visit("/careers");
    return this;
  }

  clickOnHomeTabLink() {
    cy.get("a[href='/']").eq(1).click();
  }

  clickOnAboutUsTabLink() {
    cy.get("a[href='/about']").eq(1).click();
  }

  clickOnCareersTabLink() {
    cy.get("a[href='/careers']").eq(1).click();
  }

  clickOnContactUsTabLink() {
    cy.get("a[href='/contactus']").eq(1).click();
  }
}

export default HomePageActions;
