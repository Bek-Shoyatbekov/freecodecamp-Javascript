// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;



// // Only change code above this line
// let beagle = new Dog("Snoopy");

// console.log(beagle);

function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop)
    } else {
        prototypeProps.push(prop)
    }
}

// Change the Prototype to a New Object

//instead of this
Bird.prototype.eat = function() {
    console.log("nom nom nom");
  }
  
  Bird.prototype.describe = function() {
    console.log("My name is " + this.name);
  }
  
//we can use this kind of way
Bird.prototype = {
    numLegs: 2, 
    eat: function() {
      console.log("nom nom nom");
    },
    describe: function() {
      console.log("My name is " + this.name);
    }
  };
  