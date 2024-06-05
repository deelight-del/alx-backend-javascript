/**
 * Define Class with static method.
 */

class AppController {
  static getHomepage(request, response) {
    response.write('Hello Holberton School!');
    response.end();
  }
}

module.exports = AppController;
