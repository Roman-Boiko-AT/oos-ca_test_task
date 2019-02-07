export function autoSelector(elementName: string): string {
  return `*[data-e2e="${elementName}"]`;
}
