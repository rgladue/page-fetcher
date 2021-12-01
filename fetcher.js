const input = process.argv.slice(2);

const URL = input[0];
const path = input[1];

const request = require('request')
const fs = require('fs');


request(URL,(err, res, body) => {
  fs.writeFile(path, body, err => {
    if (err) {
      console.log("DISHONOUR!!!!, Dishonour on you! Dishonour on your cow!");
    }
    const bytes = body.length;
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
  })
});
