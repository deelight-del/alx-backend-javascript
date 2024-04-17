interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'David',
  lastName: 'Akingbeni',
  age: 14,
  location: 'Ondo'
}

const student2: Student = {
  firstName: 'Oyin',
  lastName: 'Adekola',
  age: 16,
  location: 'Akure'
}

const studentList: Student[] = [student1, student2];

for (const student of studentList) {console.log..}
