// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line

const array5 = [[1], [2], [3], [[[4]]], [[[5]]]];
const newArray6 = array5.flat(2);
console.log(newArray6); //* [1,2,3,[4],[5]]

//** Why doesn't the below console.log the same result as the above

const array3 = [[1], [2], [3], [[[4]]], [[[5]]]];
array3.flat(2);
console.log(array3); //* [[1],[2],[3],[[[4]]],[[[5]]]]  doesn't seem to change it

// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]

const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];

const intoString = [...greeting].flat().join(" ");
const newArray1 = intoString.split(" ").splice(0, 3).join(" ");
const newArray2 = intoString.split(" ").splice(3, 2).join(" ");
const newArray3 = intoString.split(" ").splice(5, 7).join(" ");
const theArray1 = [newArray1, newArray2, newArray3];
console.log(theArray1.join(", "));

//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

const greetingToString = greeting.flat().join(" ");
console.log(greetingToString);

//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const notTrapped = trapped.flat(50);
console.log(notTrapped);

//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):

const userEmail3 = "     cannotfillemailformcorrectly@gmail.com   ";
const fixedEmail = userEmail3.trim();
console.log(fixedEmail);

//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

//#7 change the output array of the below to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

// #6 correct
let users = { user1: 18273, user2: 92833, user3: 90315 };
users = Object.entries(users);
console.log(users);
// end of 6

// #7 Correct
const userArrCopy = [...users];
const usersMap = userArrCopy.map((user) => {
  user[1] = user[1] * 2;
  return user;
});
console.log(usersMap);
// end of 7

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const updatedObj = Object.fromEntries(usersMap);
console.log(updatedObj)
