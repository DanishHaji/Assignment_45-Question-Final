//Name       : Danish
//Roll No    : 00405957
//Batch      : 01
//Days/Time  : Thursday (07:00PM - 10:00PM)

/*
 ****************** Question No: 40 ****************************
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/
function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title, tracks };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}
console.log(make_album("Micheal Jackson", "MoonWalker"));
console.log(make_album("Adnan Sami", "Tera Chehra"));
console.log(make_album("Atif Aslam", "Tu Jane Na", 50));
