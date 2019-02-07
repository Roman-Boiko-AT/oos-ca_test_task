Feature: Status Changing

    Background:
        Given I am on start page

    Scenario: I see all members with Applied hiring status
        Given I do not see "down" button for "lloyd gonzalez" member
        And I see "up" button for "lloyd gonzalez" member
        When I click "up" button on "lloyd gonzalez" member
        Then I see next members in "Applied" area
            | Name           | City      | Image  |
            | emma stewart   | worcester | 71.jpg |
            | danielle moore | cardiff   | 22.jpg |
            | linda ruiz     | liverpool | 41.jpg |
        And I see next members in "Interviewing" area
            | Name           | City     | Image  |
            | lloyd gonzalez | hereford | 58.jpg |
        And I see next members in "Hired" area
            | Name             | City      | Image  |
            | julia cunningham | sheffield | 23.jpg |
        And I see "down" button for "lloyd gonzalez" member
        And I see "up" button for "lloyd gonzalez" member

    Scenario: I see all members with Applied hiring status
        Given I do not see "up" button for "julia cunningham" member
        And I see "down" button for "julia cunningham" member
        When I click "down" button on "julia cunningham" member
        Then I see next members in "Applied" area
            | Name           | City      | Image  |
            | lloyd gonzalez | hereford  | 58.jpg |
            | emma stewart   | worcester | 71.jpg |
            | danielle moore | cardiff   | 22.jpg |
            | linda ruiz     | liverpool | 41.jpg |
        And I see next members in "Interviewing" area
            | Name             | City      | Image  |
            | julia cunningham | sheffield | 23.jpg |
        And I do not see any member in "Hired" area
        And I see "down" button for "julia cunningham" member
        And I see "up" button for "julia cunningham" member
