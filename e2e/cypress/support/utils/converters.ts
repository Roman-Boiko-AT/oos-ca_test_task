export function toMap(table): any {
  const parameters = new Map();
  table.rawTable.forEach(element => {
    parameters.set(element[0], element[1]);
  });
  return parameters;
}

export function toArray(oneColumnTable): any {
  return oneColumnTable.rawTable.map(item => item[0]);
}
