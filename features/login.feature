Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area
    Given Navigate to the URL
    When Click on the Contact Group
    And Verify news exists "November 2021"
    Then Verify news does not exists in broken link
    