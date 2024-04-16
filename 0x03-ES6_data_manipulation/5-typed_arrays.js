export default function createInt8TypedArray(length, position, value) {
  const array = new Int8Array(length);
  try {
    array[position] = value;
    return array;
  } catch (error) {
    throw Error('Position outside range');
  }
}
