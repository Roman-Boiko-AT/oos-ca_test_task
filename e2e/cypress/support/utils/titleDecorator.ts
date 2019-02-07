export function title(name) {
  return function decorator(target, n, descriptor) {
    try {
      target.multipleAssertions.elementsCollection[name] = n;
      target.multipleAssertions.elementsCollection['class'] = target;
    } catch (e) {
      console.warn(
        `You added title decorator, but you haven't added static multipleAssertions property as class from '../../../support/utils/MultipleAssertions' which help to realize multiple assertion for your page. ${e}`
      );
      throw e;
    }
  };
}
