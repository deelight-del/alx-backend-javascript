export default function updateStudentGradeByCity(listOfStudents, city, newGrades) {
  const newListOfStudents = listOfStudents.filter((obj) => obj.location === city).map(
    (filterObj) => {
      const gradeObj = newGrades.find((element) => element.studentId === filterObj.id);
      if (gradeObj === undefined) {
        return { ...filterObj, grade: 'N/A' };
      }
      return { ...filterObj, grade: gradeObj.grade };
    },
  );
  return newListOfStudents;
}
