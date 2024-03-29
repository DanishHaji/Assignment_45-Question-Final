//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 12 ****************************
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name. 
*/

let names: string[] = ["Areesha", "Huzaifa", "Hasnain"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some Python today?`);
}