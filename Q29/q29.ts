//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 29 ****************************
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits: string[] = ["apple", "orange", "watermelon"];

if (favorite_fruits.includes("apple")) {
  console.log("You really like apple!");
}
if (favorite_fruits.includes("orange")) {
  console.log("You really like orange!");
}

if (favorite_fruits.includes("watermelon")) {
  console.log("You really like watermelon!");
}
if (favorite_fruits.includes("banana")) {
  console.log("I really don't like bananas!");
}
if (favorite_fruits.includes("pineapple")) {
  console.log("I really don't like pineapple!");
};
