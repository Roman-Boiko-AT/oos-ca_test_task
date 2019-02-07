import { CrewApplicationsPage } from "../pages/crewApplicationsPage";

When("I click {string} button on {string} member", (direction, memberName) => {
    CrewApplicationsPage.getStatusChangingButton(memberName, direction).click();
});

Then("I do not see {string} button for {string} member", (direction, memberName) => {
    CrewApplicationsPage.getStatusChangingButton(memberName, direction).should('be.not.visible');
});

Then("I see {string} button for {string} member", (direction, memberName) => {
    CrewApplicationsPage.getStatusChangingButton(memberName, direction).should('be.visible');
});