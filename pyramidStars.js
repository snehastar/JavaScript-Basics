function stars(num) {
  for (let i = 1; i <= num; i++) {
    let pattern = "";
    for (let j = 0; j < i; j++) {
      pattern += "*";
    }
    console.log(pattern);
  }
}

stars(2);
