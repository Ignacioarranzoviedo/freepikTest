@Freepik @LogIn
Feature: FReePiK Log In
  As a Freepik user I want to login as a registered user.

  Background:
    Given A user in the Freepik site

  @FRPK001
  Scenario Outline: Login
    Given A user in the Log In page
    When the user fills the "<username>" input and the "<password>" input
    And the user click on Sing In button
    #Then the user can see the welcome page

    Examples:
      | username                | password    |
      | test.prof.888@gmail.com | testQA2021! |
