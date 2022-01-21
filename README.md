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

Test: "Numbers in the output containing a 2 should be replaced with "Boop!"
Code beepBoop(5);
Expected Output: [0, 1, "Boop!", "Won't you be my neighbor?", 4, 5]


