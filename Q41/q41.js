//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 41 ****************************
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/
var magicians = ["Harry", "Hermione", "Ron"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
