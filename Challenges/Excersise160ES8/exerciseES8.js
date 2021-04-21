// Solve the below problems:

// #1) Line up the Turtle and the Rabbit at the start line:
const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

// it should look like this:
("     ||<- Start line");
("       🐢");
("       🐇");

// when you do:
console.log(startLine);
console.log(turtle.padStart(8)); //.padStart(9) - I added this inside the console log
console.log(rabbit.padStart(8)); //.padStart(9) -I added this inside the console log

// The correct way

turtle = turtle.padStart(8);
rabbit = rabbit.padStart(8);

console.log(rabbit);
console.log(turtle);


// #2) What happens when you run turtle.trim().padEnd(9, '=') on the turtle variable
// Read about what the second parameter does in padEnd and padStart
turtle = turtle.trim().padEnd(9, "=");

//* from the looks of it above, it concats = to the end of the string
//* based on the first parameter value

// #3) Get the below object to go from:
let obj = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};
// to this:
("my name is Rudolf the raindeer");

console.log(`my ${obj.my} is ${obj.is} the ${obj.the}`); // Ummm okay i'm confused what hes asking here.

// The correct Way...werid wouldn't of been able to think of this
console.log(
  Object.entries(obj)
    .map((value) => value.join(" "))
    .join(" ")
);
