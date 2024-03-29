"use strict";
//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 30 ****************************
Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
*/
let userNames = ["Admin", "Ali", "Aamir", "Beenish", "Danish", "Faiqa"];
userNames.forEach((userName) => {
    if (userName == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName} , thank you for logging in again.`);
    }
});
