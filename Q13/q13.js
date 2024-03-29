//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 13 ****************************
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
*/
var transport = ["Toyota Corolla Car", "Suzuki GD 110 Motor Bike", "Unique Motor Cycle"];
transport.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
