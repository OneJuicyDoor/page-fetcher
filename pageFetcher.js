const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (error, response, body) {
  if (error) {
    console.error('Error:', error);
  } else {
    fs.writeFile(filePath, body, function (err) {
      if (err) {
        console.error('Error:', err);
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${filePath}.`);
      }
    });
  }
});
