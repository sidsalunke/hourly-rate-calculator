# Rate calculator
A calculator that will help calculate the hourly rate for support staff.

## How does the application work?
This application takes a json file as an input and converts it to a json file that contains the hourly rate for each shift. It also validates the input file and provides information if a shift is valid or invalid.

### Business rules

#### Hourly rates
The rules to calculate the hourly rate of a booking are summarised below:

| Rate Type | From | To | Rate ($) |
| -------- | ------- | -------- | ----------- |
| Day  | 0600 | 2000 | 38
| Night | 2000 | 0600 | 42.93
| Sat | All day | All day | 45.91
| Sun | All day | All day | 60.85

#### Rules
- The minimum booking time is 1 hour
- The maximum booking time is 24 hours
- A booking cannot end before it has started
- A booking can be booked in 15 min increments e.g. 1600 to 1715
- If any part of a booking is charged at the night rate, the whole booking is charged at the night rate:
  * Fri 1800 - 2100 will be charged at the night rate (3 x 42.93)
  * Wed 0500 - 1000 will be charged at the night rate (5 x 42.93)
- Saturday and Sunday rates apply across the whole day, there's no distinction between day and night:
  * Sat 1800 - 2200 will be charged at the sat rate (4 x 45.91)
  * Sun 0100 - 0700 will be charged at the sun rate (6 x 60.85)

#### Output
Your application should create a file called `output.json` containing the array of booking objects with total and isValid properties added. If the booking breaks one of the business rules, the total should be set to 0 and the isValid flag marked false.

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