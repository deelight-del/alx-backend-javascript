const readDb = require('./utils');

readDb('./database.csv').then((data) => {
  console.log(data);
});
