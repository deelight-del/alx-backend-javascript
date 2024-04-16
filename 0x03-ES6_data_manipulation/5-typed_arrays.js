export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const array = new Int8Array(buffer);
  try {
    array[position] = value;
    return buffer;
  } catch (error) {
    throw Error('Position outside range');
  }
}
