//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 21 ****************************
They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
*/ 
let book: { title: string; author: string; yearPublished: number } = {
    title: "Harry Potter",
    author: "J. K. Rowling",
    yearPublished: 1997
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);