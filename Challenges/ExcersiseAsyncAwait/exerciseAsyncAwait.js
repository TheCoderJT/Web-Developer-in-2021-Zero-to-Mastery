// Solve the below problems:

// #1) Convert the below promise into async await
fetch("https://jsonplaceholder.typicode.com/users/")
  .then((response) => response.json())
  .then(console.log);

const fetchUsers = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    throw new Error("Error: ", e.message);
  }
};

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls.map((url) => fetchData(url)));
    console.log("users", users);
    console.log("posta", posts);
    console.log("albums", albums);
  } catch (e) {
    console.log(e.message);
  }
};

const fetchData = async (url) => {
  try {
    const fetched = await fetch(url);
    const fetchedJson = await fetched.json();
    return fetchedJson;
  } catch (e) {
    console.log(e.message);
  }
};

// #3)Add a try catch block to the #2 solution in order to catch any errors. // Now, use the given array containing an invalid url, so you console.log  //your error with 'oooooops'.
const urls2 = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholdeTYPO.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(urls2.map((url) => fetchData(url)));
    console.log("users2", users);
    console.log("posta2", posts);
    console.log("albums2", albums);
  } catch (e) {
    console.log(e.message);
  }
};

const fetchData = async (url) => {
  try {
    const fetched = await fetch(url);
    const fetchedJson = await fetched.json();
    return fetchedJson;
  } catch (e) {
    console.log(e.message);
  }
};
