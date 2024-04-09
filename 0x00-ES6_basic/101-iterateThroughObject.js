export default function iterateThroughObject(reportWithIterator) {
  let combinedString = '';
  for (const value of reportWithIterator.slice(0, -1)) {
    combinedString += `${value} | `;
  }
  combinedString += reportWithIterator.slice(-1);
  return combinedString;
}
