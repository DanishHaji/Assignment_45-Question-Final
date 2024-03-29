//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 37 ****************************
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(
  size: string = "Large",
  message: string = "I love TypeScript"
) {
  console.log(
    `Making ${size} T-Shit with the message ${message} printed on it`
  );
}
make_shirt(); // Default with size and message
make_shirt("Medium"); // default with message
make_shirt("Small", "I love Coding"); // with different message
