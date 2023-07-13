function splitify(str) {
    // Only change code below this line
  return str.split(/[\s-,.]/ig);
  
    // Only change code above this line
  }
  
 const re = splitify("This.is.a-sentence");
 
 console.log(re);