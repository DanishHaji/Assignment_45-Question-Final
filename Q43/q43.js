//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 43 ****************************
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
var magicians = ["Harry", "Hermione", "Ron"];
function make_great(magicians) {
    var Great_Magicians = [];
    magicians.forEach(function (magician) {
        Great_Magicians.push("".concat(magician, " the Great"));
    });
    return Great_Magicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var greatMagicians = make_great(magicians.slice()); // modified array
console.log("Original magicians:");
show_magicians(magicians); // original names
console.log("Great magicians:");
show_magicians(greatMagicians); // modified names
