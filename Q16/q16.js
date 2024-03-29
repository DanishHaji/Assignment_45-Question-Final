"use strict";
//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 16 ****************************
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
*/
let guests = ["Sir Zia", " Sir Daniyal", "Sir Ameen Alam"];
console.log("Good News! I found a bigger dinner table!");
// Now Adding More Guest as per requirement
guests.unshift("Sir Qasim");
guests.splice(guests.length / 2, 0, "Sir Ali Jawwad");
guests.push("Miss Iqra Naz");
guests.forEach((guest) => {
    console.log(`Dear ${guest} , would you like to join me for dinner?`);
});
