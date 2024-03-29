//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 14 ****************************
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
 */

let guest: string [] = ["Sir Zia", "Sir Daniyal","Sir Ameen Alam"];
guest.forEach(guest => {
    console.log(`Dear ${guest}, Would you like join me for dinner ?`);
});