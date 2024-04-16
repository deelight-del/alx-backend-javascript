export default function getStudnentByLocation(listOfStudents, city) {
  return listOfStudents.filter((obj) => obj.location === city);
}
