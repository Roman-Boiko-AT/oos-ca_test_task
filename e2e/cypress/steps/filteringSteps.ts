import { CrewApplicationsPage } from "../pages/crewApplicationsPage";

When("I filter members by {string} with {string} value", (filterType : string, value) => {
    CrewApplicationsPage.filterBy(filterType.toLocaleLowerCase(), value);
});

When("I clear filters", () => {
    CrewApplicationsPage.clearAllFilters();
});