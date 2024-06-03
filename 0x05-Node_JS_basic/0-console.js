#!/usr/bin/node
// Function to displayMessage.

function displayMessage(arg) {
  process.stdout.write(`${arg}\n`);
}

module.exports = displayMessage;
