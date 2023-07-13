function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

// Only change code below this line

// let duck = Object.create(Animal.prototype) // Change this line

// let beagle = Object.create(Animal.prototype)// Change this line

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;

Dog.prototype.constructor = Dog;



let duck = new Bird();
duck.constructor;
let beagle = new Dog();
beagle.constructor