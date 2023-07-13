// function Dog(name) {
//     this.name = name;
// }

// let beagle = new Dog("Snoopy");

// // Only change code below this line
// Dog.prototype.isPrototypeOf(beagle);


function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);

function Cat(name) {
    this.name = name;
}

Cat.prototype = {
    constructor: Animal,

};

function Bear(name) {
    this.name = name;
}

Bear.prototype = {
    constructor: Animal,

};

function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }

};