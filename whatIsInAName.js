/** @format */

function whatIsInAName(collection, source) {
  let arr = [];
  for (let key in collection) {
    if (collection[key].length == source.length) {
      
    }
  }
  console.log(arr);
}

let firstArg = [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
  ],
  secondArg = { apple: 1, cookie: 2 };

whatIsInAName(firstArg, secondArg);
