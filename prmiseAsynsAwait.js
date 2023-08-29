//promises
fetch("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => res.json())
  .then((data) => console.log(data));

//async await
async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  const data = res.json();
  console.log(data);
}
