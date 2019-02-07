export class CrewApplicationsPage {
  static getHeader() {
    return cy.get(".App-title");
  }

  static getLogo() {
    return cy.get(".App-logo");
  }

  static filterBy(filterType : string, value : string) {
    cy.get(`#${filterType}`).type(value);
    cy.get('button').contains('Submit').click();
  }

  static clearAllFilters() {
    cy.get('button').contains('Clear').click();
  }

  static getStatusChangingButton(memberName : string, direction : string){
       const direct = direction === 'up' ? Directions.up : Directions.down;
   return cy.get(`.CrewMemeber-name`).children().contains(memberName).parent().parent().parent().find("button").contains(direct);
  }

  static getColumnMembersAsArray(hiringStatus: string) : Cypress.Chainable<Candidates[]> {
    return cy
      .get(".App-column")
      .contains(hiringStatus)
      .parent()
      .find(".CrewMember-container .CrewMember-info")
      .then(members => {
        const candidates = new Array<Candidates>();
        for (let i = 0; i < members.length; i++) {
          candidates.push({
            name: members[i].getElementsByClassName("CrewMemeber-name").item(0)
              .firstChild.textContent,
            city: members[i].getElementsByClassName("CrewMemeber-name").item(0)
              .lastChild.textContent,
            icon: members[i]
              .getElementsByClassName("CrewMemeber-photo")
              .item(0)
              .getAttribute("style")
              .match(/(\w){2,}.jpg/g)[0],
          });
        }
        return candidates;
      });
  }

  static getColumnMembers(hiringStatus: string) {
    return cy.get(".App-column")
      .contains(hiringStatus)
      .parent()
      .find(".CrewMember-container .CrewMember-info");
  }
}
  
class Candidates {
  name: String;
  city: String;
  icon: String;
}

enum Directions{
    up = ">",
    down = "<"
}
