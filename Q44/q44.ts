//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 44 ****************************
Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
*/ 
function make_sandwich(...items: string[]){
    console.log(`Making a sandwich with items: ${items.join(",")}.`);
    
}
make_sandwich("chicken", "ketchup");
make_sandwich("chicken", "cheese", "ketchup");
make_sandwich("chicken", "cheese", "ketchup", "mayo");