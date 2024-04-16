export default function getListStudentIds(arr) {
  if (!arr.isArray()) { return []; }
  return arr.map((obj) => obj.id);
}
