"use strict";
//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 24 ****************************
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings.
console.log("Testing equality and inequality with strings");
console.log("danish" == "danish"); // shows true
console.log("X" !== "X"); // shows false
// Tests using the lower case function.
console.log("Testing using the lower case function");
console.log("Danish".toLowerCase() == "danish"); // shows true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
console.log("Numerical tests involving equality and inequality");
console.log(100 == 100); // shows true
console.log(200 !== 200); // shows false
console.log("Numerical tests involving greater than and less than");
console.log(500 > 250); // shows true
console.log(250 < 100); // shows false
console.log("Numerical tests involving 'greater than or equal to' and 'less than or equal to'");
console.log(2 >= 2); // shows true
console.log(2 <= 1); // shows false
// Tests using "and" and "or" operators.
console.log("Testing using 'and' and 'or' operators");
console.log(100 && 200); // shows true
console.log(100 || 200); // shows false
// Test whether an item is in a array.
let stationary = ["books", "pencil", "copies"];
console.log("Is pencil in the stationary ?");
console.log(stationary.includes("pencil")); // shows true
// Test whether an item is not in a array.
console.log("is 'eraser' not in the stationary ? ");
console.log(!stationary.includes("eraser")); // shows true
