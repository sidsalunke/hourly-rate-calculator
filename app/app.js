const fs = require('fs');
const transformJson = require('./src/transformJson');

const inputFile = fs.readFileSync('./data/input.json');
const data = JSON.parse(inputFile);

const expectedJson = transformJson.transform(data);

function finished() {
  console.log('done');
}

fs.writeFile('./output.json', JSON.stringify(expectedJson, null, 2), finished);
