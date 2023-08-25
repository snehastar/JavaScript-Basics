//title
//body
//author
//views
//comments
// {author, body}
// isLive

//creating constructor function object
function blog(title, body, author, views, comments, isLive) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = views;
  this.comments = comments;
  this.isLive = isLive;
}

function comments(name, message) {
  this.name = name;
  this.message = message;
}

// creatting object properties
let title = "JavaScript A-Z";
let body = "JavaScript is a dynamically types programming language";
let author = "Sneha Shukla";
let views = 9999;
let isLive = true;
let comment1 = new comments("Andy", "This is aweome!");
let comment2 = new comments("Samy", "Good read!");
let comment3 = new comments("Carl", "Informative!");

//creating an object
let blog1 = new blog(title, body, author, views, comment1, isLive);
console.log(blog1);
