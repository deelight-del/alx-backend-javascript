/*eslint-disable*/
/**
 * Creating a more complex Server
 * Using the Node Interface.
 */

const { createServer } = require('http');
const fs = require('fs');

const app = createServer((req, res) => {
  if (req.url === '/') { res.end('Hello Holberton School!'); }
  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    const dbName = process.argv[2];
    fs.open(dbName, (err, fd) => {
      if (err) { throw new Error('Cannot load the database'); }
      fs.read(fd, (err, bytesRead, buffer) => {
        if (err) { throw new Error('Cannot load the database'); }
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
        const respArray = []
        for (const field in departments) {
          respArray.push(`Number of students in ${field}: ${departments[field].count}. List: ${departments[field].listOfStudents.join(', ')}`);
        }
        res.end(respArray.join('\n'));
        // res.end(bulkData);
      });
    });
  }
});

app.listen(1245);

module.exports = app;
