@Freepik @searchForResources
Feature: FReePiK Search For Resources
  As a Freepik user I want to Search For Resources

  Background:
    Given A user in the Freepik site

  @FRPK001
  Scenario Outline: Search For Resources
    Given A user types the "<resource_name>" in the Resource Finder
    When the user sets some filters 
    And the user select a resource
    Then the oppened tab and the new URL have the same data-id

    Examples:
      | resource_name |
      | background    |