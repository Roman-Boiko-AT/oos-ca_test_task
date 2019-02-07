export class MultipleAssertions {
  elementsCollection = {};

  should(
    elementCollection: Array<string>,
    shouldAssertion: string,
    ...callMethodArgs
  ) {
    elementCollection.forEach(element => {
      try {
        this.elementsCollection['class'][this.elementsCollection[element]]
          .call(this.elementsCollection['class'], callMethodArgs[0])
          .should(shouldAssertion);
      } catch (e) {
        console.warn(
          `Method for ${element} key is not defined. Please check that you map the title decorator to the related method which returns page element. ${e}`
        );
        throw e;
      }
    });
  }

  exist(dictionary: Array<string>, ...callMethodArgs) {
    dictionary.forEach(element => {
      try {
        this.elementsCollection['class'][this.elementsCollection[element]].call(
          this.elementsCollection['class'],
          callMethodArgs[0]
        );
      } catch (e) {
        console.warn(
          `Method for ${element} key is not defined. Please check that you map the title decorator to the related method which returns page element. ${e}`
        );
        throw e;
      }
    });
  }

  shouldIncludingValueToCheck(
    elementAndValueCollection: Map<string, string>,
    shouldAssertion: string,
    ...callMethodArgs
  ) {
    elementAndValueCollection.forEach((elementValue, element) => {
      try {
        this.elementsCollection['class'][this.elementsCollection[element]]
          .call(this.elementsCollection['class'], callMethodArgs[0])
          .should(shouldAssertion, elementValue);
      } catch (e) {
        console.warn(
          `Method for ${element} key is not defined. Please check that you map the title decorator to the related method which returns page element. ${e}`
        );
        throw e;
      }
    });
  }
}
