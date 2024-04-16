export default function cleanSet(set, startString) {
  let finalString = '';
  if (startString === '' || typeof startString !== 'string') { return finalString; }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      if (finalString === '') {
        finalString += value.slice(startString.length);
      } else {
        finalString += `-${value.slice(startString.length)}`;
      }
    }
  }
  return finalString;
}
