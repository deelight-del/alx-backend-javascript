export default function cleanSet(set, startString) {
  let finalString = '';
  for (const value of set) {
    if (value.startsWith(startString)) {
      if (finalString === '') {
        finalString += value.slice(3);
      } else {
        finalString += `-${value.slice(3)}`;
      }
    }
  }
}
