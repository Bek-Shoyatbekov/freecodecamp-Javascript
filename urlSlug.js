// Only change code below this line
function urlSlug(title) {
    return title
    .trim()
    .split(' ')
    .map((e)=>e.toLowerCase())
    .filter((e)=>e.length>0).join('-');
  }
  // Only change code above this line
  const re = urlSlug(" Winter Is  Coming");
  
  console.log(re);