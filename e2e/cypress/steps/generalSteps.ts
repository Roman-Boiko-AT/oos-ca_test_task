import { CrewApplicationsPage } from "../pages/CrewApplicationsPage";

Given("I am on start page", () => {
  cy.visit("");
  cy.url().should("eq", Cypress.config().baseUrl);
});

Then("I see app header with logo", () => {
  CrewApplicationsPage.getHeader().should(
    "have.text",
    "OpenOceanStudio: Crew Applications"
  );
  CrewApplicationsPage.getLogo().then($el =>
    expect($el.attr("src")).to.contain("logo.10147893.png")
  );
});

Then("I see next members in {string} area", (hiringStatus, dataTable) => {
  const expected = dataTable["rawTable"]
    .filter((row, index) => index > 0)
    .map(row => ({
      name: row[0],
      city: row[1],
      icon: row[2],
    }));

  CrewApplicationsPage.getColumnMembersAsArray(hiringStatus).then(actual =>
    assert.deepEqual(
      actual,
      expected,
      `There are some candidates missing in ${hiringStatus} area`
    )
  );
});

Then("I do not see any member in {string} area", hiringStatus => {
  CrewApplicationsPage.getColumnMembers(hiringStatus).should("have.length", 0);
});
