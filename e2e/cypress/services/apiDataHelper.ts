export class APIDataHelper {
  static getDataFromSomeAPI(): any {
    return cy.get('@BearerToken').then(token =>
      cy
        .request({
          url: `someURL`,
          auth: { bearer: token }
        })
        .then(response => {
          return response.body;
        })
    );
  }

  static getAndModifyDataFromJSON(fileName: string, modifiersTable?): any {
    if (modifiersTable) {
      const modifiedData = modifiersTable.rowsHash();
      return cy.fixture(fileName).then(data => {
        const someData = Cypress._.cloneDeep(data);
        for (const path in modifiedData) {
          if (modifiedData.hasOwnProperty(path)) {
            if (modifiedData[path] === 'true') {
              modifiedData[path] = true;
            }
            if (modifiedData[path] === 'false') {
              modifiedData[path] = false;
            }
            if (modifiedData[path] === 'unset') {
              const match = path.match(/(.*)\[([0-9]+)\]$/);
              if (match) {
                Cypress._.get(someData, match[1]).splice(
                  parseInt(match[2], 10),
                  1
                );
              } else {
                Cypress._.unset(someData, path);
              }
            } else {
              Cypress._.set(
                someData,
                path,
                Cypress._.cloneDeep(
                  Cypress._.get(
                    someData,
                    modifiedData[path],
                    modifiedData[path]
                  )
                )
              );
            }
          }
        }
        return someData;
      });
    } else {
      return cy.fixture(fileName);
    }
  }
}
