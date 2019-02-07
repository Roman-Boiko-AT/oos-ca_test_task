Feature: Smoke

    Background:
        Given I am on start page

    Scenario: I see page header with logo
        Then I see app header with logo

    Scenario: I see all members with Applied hiring status
        Then I see next members in "Applied" area
            | Name           | City      | Image  |
            | lloyd gonzalez | hereford  | 58.jpg |
            | emma stewart   | worcester | 71.jpg |
            | danielle moore | cardiff   | 22.jpg |
            | linda ruiz     | liverpool | 41.jpg |
        And I see next members in "Hired" area
            | Name             | City      | Image  |
            | julia cunningham | sheffield | 23.jpg |
        And I do not see any member in "Interviewing" area
