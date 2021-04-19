// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"],
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"],
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"],
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"],
  },
];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames

//* is he asking me to add a ! to the usernames or
//* add the usernames with ! to a new array?
//* I decided to do it both just cause the question above was vauge

const userNames = [];
array.forEach((username) => {
  username.username === "!" ? userNames.push(username) : "No Match";
});
console.log(userNames);

const userNames2 = [];
array.forEach((usernames) => {
  const addEx = (usernames.username += "!");
  userNames2.push(addEx);
});
console.log(userNames2);

//Create an array using map that has all the usernames with a "? to each of the usernames

//* once again the wording is confusing above
//* none of the usernames has a ? to the names
//* so the array would be empty...I'm going to do both again

const map1 = array.map((names) => {
  return names.username === "?" ? username : "None";
});
console.log(map1);

const map2 = array.map((names) => (names.username += "?"));
console.log(map2);

//Filter the array to only include users who are on team: red

const redTeam = array.filter((user) => user.team === "red");
console.log(redTeam);

//Find out the total score of all users using reduce

// (1), what is the value of i?
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//   console.log(num, i);
//   alert(num);
//   return num * 2;
// });

//* Rewrote the above
const allUsers = array
  .map((user) => user.score)
  .reduce((acc, score) => {
    return acc + score;
  }, 0);
console.log("Total Score", allUsers);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.

const newList = array.map((user) => user.items.map((item) => (item += "!")));
console.log(newList);
