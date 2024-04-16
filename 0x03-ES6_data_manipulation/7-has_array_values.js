export default function hasValuesFromArray(set, array) {
  return Set(array).subSetOf(set);
}
