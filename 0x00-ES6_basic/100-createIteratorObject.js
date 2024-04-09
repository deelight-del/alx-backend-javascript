export default function createIteratorObject(report) {
  const iteratorObject = [];
  for (const value of [...Object.values(report.allEmployees)]) {
    iteratorObject.push(...value);
  }
  return iteratorObject;
}
