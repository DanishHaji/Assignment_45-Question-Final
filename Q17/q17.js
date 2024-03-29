"use strict";
//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 17 ****************************
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
*/
// Question no 16
let guests = ["Sir Zia", " Sir Daniyal", "Sir Ameen Alam"];
console.log("Good News! I found a bigger dinner table!");
// // Now Adding More Guest as per requirement
guests.unshift("Sir Qasim");
guests.splice(guests.length / 2, 0, "Sir Ali Jawwad");
guests.push("Miss Iqra Naz");
guests.forEach((guest) => {
    console.log(`Dear ${guest} , would you like to join me for dinner?`);
});
// // Question 17 Answer
console.log("Unfortunately, I can Invite only two members for dinner");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry ${removedGuest}, I can not invite you for dinner?`);
}
guests.forEach((guest) => {
    console.log(`Dear ${guest}, You are still invited for dinner?`);
});
guests.splice(0, guests.length);
console.log(guests); // ==> shows empty list
