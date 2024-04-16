export default function cleanSet(set, startString) {
  let finalString = '';
  for (const value of set) {
    if (value.startsWith(startString) && startString !== '') {
      if (finalString === '') {
        finalString += value.slice(startString.length);
      } else {
        finalString += `-${value.slice(startString.length)}`;
      }
    }
  }
  return finalString;
}
