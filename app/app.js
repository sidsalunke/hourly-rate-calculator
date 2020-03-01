const fs = require('fs');
const transformJson = require('./src/transformJson');

const inputFile = fs.readFileSync('./data/input.json');
const data = JSON.parse(inputFile);

const expectedJson = transformJson.transform(data);
console.log(expectedJson);

function finished() {
  console.log('done');
}

fs.writeFile('./expected.json', JSON.stringify(expectedJson, null, 2), finished);
