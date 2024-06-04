/*eslint-disable*/
/*
 * Building a lightweight server applicaion
 * using ExpressJS
 */

const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('This is the list of our students\n');
  // const dbName = process.argv[2];
  let dbName;
  if (process.argv.length < 3) { dbName = 'null'; } else { dbName = process.argv[2]; }
  fs.open(dbName, (err, fd) => {
    if (err) {
      res.write('Cannot load the database');
      res.end();
      return;
    }
    fs.read(fd, (err, bytesRead, buffer) => {
      if (err) {
        // ('Cannot load the database');
        res.write('Cannot load the database');
        res.end();
        return;
      }
      const bulkData = buffer.toString('utf8', 0, bytesRead).trim();
      // Convert bulkData to Array.
      const dataArray = bulkData.split('\n').slice(1);
      let totalStudents = 0;
      const departments = {};
      for (const line of dataArray) {
        // if (line.length > 1) {
        //  continue;
        // }
        totalStudents += 1;
        const lineArray = line.split(',');
        const field = lineArray[3];
        const firstName = lineArray[0];
        if (field in departments) {
          departments[field].count += 1;
          departments[field].listOfStudents.push(firstName);
        } else {
          departments[field] = { count: 1, listOfStudents: [firstName] };
        }
      }
      res.write(`Number of students: ${totalStudents}\n`);
      const respArray = [];
      for (const field in departments) {
        respArray.push(`Number of students in ${field}: ${departments[field].count}. List: ${departments[field].listOfStudents.join(', ')}`);
      }
      res.write(respArray.join('\n'));
      res.end();
    });
  });
});

app.listen(port);

module.exports = app;
