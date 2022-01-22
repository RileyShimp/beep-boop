# Mr.Roboger's Neighborhood

[Github Pages Link](https://rileyshimp.github.io/beep-boop/)

#### [Riley Shimp](https://www.github.com/rileyshimp)

## Technologies Used

* HTML
* CSS
* JavaScript
* Bootstrap
* JQuery

## Description
This is a page that takes a number from the user and returns a range of numbers from 0 to the user inputted number with fun substitutions made for any number in the range containing a 1, 2 or 3.

## Setup/Installation Requirements

Open this [Github Pages Link](https://rileyshimp.github.io/beep-boop/) in your browser.

or follow the instructions below..

### Step 1
Clone the repository:
``` 
$ git clone https://github.com/RileyShimp/beep-boop.git 
```
### Step 2
Navigate to the `Beep-Boop` directory on your computer.
### Step 3
Open `index.html` in your preferred browser

## Tests:

Describe beepBoop()

Test: "It should return an array with the inputted number in it"
Code: beepBoop(24);
Expected Output:[24]

Test: "It should not return anything if a number was not entered
Code: beepBoop("not a number");
Expected Output: []

Test: "It should return a range of numbers from 0 to the user inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "Numbers in the output containing a 3 should be replaced with "Won't you be my neighbor?"
Code: beepBoop(5);
Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5]

Test: "Numbers in the output containing a 2 but not a 3 should be replaced with "Boop!"
Code: beepBoop(5);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "Numbers in the output containing a 1 but not a 2 or 3 should be replaced with "Beep!"
Code: beepBoop(5);
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test "Multiple digit numbers in the output containing 1, 2 or 3 should be replace with correct strings"
Code: beepBoop(100);
Expected Output: [0, "Beep!", "Boop!",..., 89, 90, "Beep!", "Boop!", "Won't you be my neighbor?", 94,...]

Describe beepBoopReverse()

Test: "It should return the same thing as beepBoop() but in reverse."
Code: beepBoopReverse(5)
Expected output:[5, 4, "Won't you be my neighbor?", "Boop!", "Beep!", 0]

## Known Bugs

* UI logic for beepBoopReverse() has not been completed so the function can't be interacted with.

## License

[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 01/07/2022 Riley Shimp