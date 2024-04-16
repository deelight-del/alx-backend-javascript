export default function getStudentIdSum(listOfStudents) {
  return listOfStudents.reduce((accumulator, currValue) => accumulator + currValue);
}
