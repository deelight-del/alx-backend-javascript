/**
 * Reading a file asynchronously.
 */

const fs = require('fs');

function countStudents (path) {
  let content;
  try {
    content = fs.readFileSync(path, { encoding: 'utf-8' });
    const dataArray = content.split('\n').slice(1);
    let totalStudents = 0;
    const departments = {};
    for (const line of dataArray) {
      if (line.length === 0) continue;
      totalStudents += 1;
      const lineArray = line.split(',');
      const field = lineArray.slice(-1);
      const firstName = lineArray[0];
      if (field in departments) {
        departments[field].count += 1;
        departments[field].listOfStudents.push(firstName);
      } else {
        departments[field] = { count: 1, listOfStudents: [firstName] };
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const field in departments) {
      console.log(`Number of students in ${field}: ${departments[field].count}. List: ${departments[field].listOfStudents.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
