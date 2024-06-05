/**
 * Create Student Class Controller.
 * Class will contain two staic methods.
 */

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.write('This is the list of our students\n');
    // readDatabase('./database.csv')
    readDatabase(process.argv[2])
      .then((dataObj) => {
        let key;
        let value;
        const responseData = [];
        for ([key, value] of Object.entries(dataObj)) {
          responseData.push(`Number of students in ${key}: ${value.length}. List: ${value.join(', ')}`);
        }
        response.write(responseData.join('\n'));
        response.end();
      })
      .catch(() => {
        response.status(500);
        response.write('Cannot load the database');
        response.end();
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    // readDatabase('./database.csv')
    readDatabase(process.argv[2])
      .then((dataObj) => {
        response.send(`List: ${dataObj[major].join(', ')}`);
      })
      .catch(() => {
        response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
