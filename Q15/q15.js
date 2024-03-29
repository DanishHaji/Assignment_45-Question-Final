//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)
/*
 ****************** Question No: 15 ****************************
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
*/
// Question No:14
var guests = ["Sir Zia", " Sir Daniyal", "Sir Ameen Alam"];
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", Would you like to join me for Dinner ?"));
});
// Question No:15
var notComing = "Sir Zia";
console.log("".concat(notComing, " unable to come for Dinner."));
var newGuest = "Sir Qasim";
guests[guests.indexOf(notComing)] = newGuest;
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", Would you like to join for Dinner ?"));
});
