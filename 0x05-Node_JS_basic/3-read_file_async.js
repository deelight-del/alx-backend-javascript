#!/usr/bin/node

const { open } = require('node:fs/promises');

let fileHandle;
let totalStudents = 0;
const departments = {};
async function countStudents(path) {
  try {
    fileHandle = await open(path);
    for await (const line of fileHandle.readLines()) {
      if (line.startsWith('firstname') === true) continue;
      totalStudents += 1;
      const data = line.split(',');
      const dept = data.slice(-1);
      if (dept in departments) {
        departments[dept].count += 1;
        departments[dept].listOfStudents.push(data[0]);
      } else {
        departments[dept] = { count: 1, listOfStudents: [data[0]] };
      }
    }
    console.log(`Number of students: ${totalStudents}`);
    for (const dept in departments) {
      console.log(`Number of students in ${dept}: ${departments[dept].count}. List: ${departments[dept].listOfStudents.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  } finally {
    if (fileHandle) { await fileHandle.close(); }
  }
}

module.exports = countStudents;
