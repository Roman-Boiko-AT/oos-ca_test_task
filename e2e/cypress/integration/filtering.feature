Feature: Filtering

    Background:
        Given I am on start page

    Scenario: I can filter member by Name using string inclusion
        When I filter members by "Name" with "le" value
        Then I see next members in "Applied" area
            | Name           | City     | Image  |
            | lloyd gonzalez | hereford | 58.jpg |
            | danielle moore | cardiff  | 22.jpg |
        And I do not see any member in "Interviewing" area
        And I do not see any member in "Hired" area

    Scenario: I can filter member by First name
        When I filter members by "Name" with "julia" value
        Then I see next members in "Hired" area
            | Name             | City      | Image  |
            | julia cunningham | sheffield | 23.jpg |
        And I do not see any member in "Applied" area
        And I do not see any member in "Interviewing" area

    Scenario: I can filter member by Last Name
        When I filter members by "Name" with "moore" value
        Then I see next members in "Applied" area
            | Name           | City    | Image  |
            | danielle moore | cardiff | 22.jpg |
        And I do not see any member in "Interviewing" area
        And I do not see any member in "Hired" area

    Scenario: I can filter member by Full Name
        When I filter members by "Name" with "emma stewart" value
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

    Scenario: I can filter member by City using string inclusion
        When I filter members by "City" with "he" value
        Then I see next members in "Applied" area
            | Name           | City     | Image  |
            | lloyd gonzalez | hereford | 58.jpg |
        And I see next members in "Hired" area
            | Name             | City      | Image  |
            | julia cunningham | sheffield | 23.jpg |
        And I do not see any member in "Interviewing" area

    Scenario: I can filter member by City name
        When I filter members by "City" with "liverpool" value
        Then I see next members in "Applied" area
            | Name       | City      | Image  |
            | linda ruiz | liverpool | 41.jpg |
        And I do not see any member in "Interviewing" area
        And I do not see any member in "Hired" area

    Scenario: I can filter member by Name and City simultaneously
        When I filter members by "Name" with "stewart" value
        And I filter members by "City" with "worcester" value
        Then I see next members in "Applied" area
            | Name         | City      | Image  |
            | emma stewart | worcester | 71.jpg |
        And I do not see any member in "Interviewing" area
        And I do not see any member in "Hired" area

    Scenario: I can reset filtering
        Given I filter members by "City" with "cardiff" value
        When I clear filters
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