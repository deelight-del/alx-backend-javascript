export default function getStudentIdSum(listOfStudents) {
  const initialValue = 0;
  return listOfStudents.reduce(
    (accumulator, currValue) => accumulator + currValue.id,
    initialValue,
  );
}
