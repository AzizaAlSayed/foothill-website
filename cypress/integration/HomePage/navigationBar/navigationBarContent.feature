Feature: Navigation bar content

  Scenario: Verify that user can find the Home tab when the user is on the About Us tab
    Given A user was on the About Us page
    When  The user looks at the Navigation bar 
    Then  The Home tab should be included in the bar
  
  Scenario: Verify that user can find the Home tab when the user is on the Careers tab
    Given A user was on the Careers page
    When  The user looks at the Navigation bar 
    Then  The Home tab should be included in the bar
  
  Scenario: Verify that user can find the Home tab when the user is on the Contact Us tab
    Given A user was on the Contact Us page
    When  The user looks at the Navigation bar 
    Then  The Home tab should be included in the bar
  
  Scenario: Verify that user can find the Home tab when the user is on that tab
    Given A user was on the Home page
    When  The user looks at the Navigation bar 
    Then  The Home tab should be included in the bar

  Scenario: Verify that user can find the About Us tab when the user is on that tab
    Given A user was on the About Us page
    When  The user looks at the Navigation bar 
    Then  The About Us should be included in the bar

  Scenario: Verify that user can find the About Us tab when the user is on the Careers tab
    Given A user was on the Careers page
    When  The user looks at the Navigation bar 
    Then  The About Us should be included in the bar

  Scenario: Verify that user can find the About Us tab when the user is on the Contact Us tab
    Given A user was on the Contact Us page
    When  The user looks at the Navigation bar 
    Then  The About Us should be included in the bar

  Scenario: Verify that user can find the About Us tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user looks at the Navigation bar 
    Then  The About Us should be included in the bar

  Scenario: Verify that user can find the Careers tab when the user is on the About Us tab
    Given A user was on the About Us page
    When  The user looks at the Navigation bar 
    Then  The Careers should be included in the bar
 
  Scenario: Verify that user can find the Careers tab when the user is on that tab
    Given A user was on the Careers page
    When  The user looks at the Navigation bar 
    Then  The Careers should be included in the bar

  Scenario: Verify that user can find the Careers tab when the user is on the Contact Us tab
    Given A user was on the Contact Us page
    When  The user looks at the Navigation bar 
    Then  The Careers should be included in the bar

  Scenario: Verify that user can find the Careers tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user looks at the Navigation bar 
    Then  The Careers should be included in the bar

  Scenario: Verify that user can find the Contact Us tab when the user is on the About Us tab
    Given A user was on the About Us page
    When  The user looks at the Navigation bar 
    Then  The Contact Us should be included in the bar

  Scenario: Verify that user can find the Contact Us tab when the user is on the Careers tab
    Given A user was on the Careers page
    When  The user looks at the Navigation bar 
    Then  The Contact Us should be included in the bar

  Scenario: Verify that user can find the Contact Us tab when the user is on that tab
    Given A user was on the Contact Us page
    When  The user looks at the Navigation bar 
    Then  The Contact Us should be included in the bar

  Scenario: Verify that user can find the Contact Us tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user looks at the Navigation bar 
    Then  The Contact Us should be included in the bar