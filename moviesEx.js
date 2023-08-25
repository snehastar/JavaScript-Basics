const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

//print all movies released in 2018 where rating is higher than 4
//only display title of movie and sort in descending order of their rating

function compute(movies) {
  const arr = [];
  movies.forEach((ele) => {
    if (ele["year"] === 2018 && ele["rating"] >= 4) {
      arr.push(ele);
    }
  });

  //console.log(arr);
  let namesSort = arr.sort(function (first, second) {
    if (first.rating < second.rating) return 1;
    if (first.rating > second.rating) return -1;
    return 0;
  });
  //console.log(namesSort);
  let output = [];
  for (let key of namesSort) output.push(key["title"]);
  //console.log(output);
  return output;
}

console.log(compute(movies));

//best way to do all this
const title = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(title);
//note that we reversed the ans, because we sorte in ascending order
//to get ans in descending order, we reversed the array
