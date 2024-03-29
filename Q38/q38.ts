//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 38 ****************************
Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
*/

function describe_city(city: string, country: string = "Pakistan") {
  console.log(`${city} is in ${country}`);
}
describe_city("Karachi"); // in default country
describe_city("Islamabad"); // in default country
describe_city("Katmandu", "Nepal"); // not in default country