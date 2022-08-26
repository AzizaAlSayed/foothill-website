Feature: Navigate between the tabs

  Scenario: Verify that user can navigate the Home tab when the user is on the About Us tab
    Given A user was on the About Us page
    When  The user clicks on the Home tab on the Navigation bar 
    Then  "Empowering Operators Worldwide" should be appear
    And   The Our Service button should be appear

  Scenario: Verify that user can navigate the About Us tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user clicks on the About Us tab on the Navigation bar 
    Then  "Who We Are" should be shown
    And   "Meet the Team" section should be appear

  Scenario: Verify that user can navigate the Careers tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user clicks on the Careers tab on the Navigation bar
    Then  "Grow with Us" should be appear
    And   The Search input should be shown
@focus
  Scenario: Verify that user can navigate the Contact Us tab when the user is on the Home tab
    Given A user was on the Home page
    When  The user clicks on the Contact Us tab on the Navigation bar
    Then  The "Get In Touch With Us" title should be appear
    And   The Name input should be shown
    And   The Email input should be shown
    And   The Phone input should be shown
    And   The Message input should be shown

