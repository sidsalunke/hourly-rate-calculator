# Rate calculator
A calculator that will help calculate the hourly rate for support staff.

## How does the application work?
This application takes a json file as an input and converts it to a json file that contains the hourly rate for each shift. It also validates the input file and provides information if a shift is valid or invalid.

# Pre-requisites

- Node.js should be installed. You can install it from [here](https://nodejs.org/en/download/)

# Running unit tests

- Install all the dependencies by running `npm install`
- Once installed, run `npm run test` to execute tests
- All tests are stored in the `tests` folder
- This project uses Jest as the testing framework. More information about Jest can be found [here](https://jestjs.io/)

# Running the app

- Install all the dependencies by running `npm install`
- The application expects a file named `input.json` which can be found in the below directory
```bash
├ app
  ┬ data
    ┬ input.json
```
- Run the application by executing the `app.js` file -> `node app.js`
- Once the application executes successfully, you will see `Finished writing to file.` on the console and a file named `output.json` will be saved to the File System