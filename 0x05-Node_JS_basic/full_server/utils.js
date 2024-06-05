/**
 * utils.js. Contains function to read
 * from a database.
 */

const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.open(path, (err, fd) => {
      if (err) { reject(err); }
      fs.read(fd, (err, bytesRead, buffer) => {
        if (err) { reject(err); }
        const data = buffer.toString('utf8', 0, bytesRead).trim();
        const dataArray = data.split('\n').slice(1);
        const namesByField = {};
        for (const line of dataArray) {
          const firstName = line.split(',')[0];
          const field = line.split(',')[3];
          if (field in namesByField) {
            namesByField[field].push(firstName);
          } else {
            namesByField[field] = [firstName];
          }
        }
        resolve(namesByField);
      });
    });
  });
}

module.exports = readDatabase;
