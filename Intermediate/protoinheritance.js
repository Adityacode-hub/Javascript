//function prototyping or simple the function prototyping

function Person(name)
{
    this.name=name 
}
Person.prototype.greet=function()
{
    console.log(`hello,my name is ${this}`);
}
let Aditya=new Person("aditya");
Aditya.greet();

//object literal prototyping
let animal = {
  eats: true
};

let dog = {
  barks: true
};

dog.__proto__ = animal;

console.log(dog.eats); // true

//object create prototyping
let animal1 = {
  eats: true
};

let cat = Object.create(animal1);

console.log(cat.eats); // true

// Class Prototyping (ES6)

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

let p1 = new Person("Aditya");
p1.greet();

//Person.prototype.greet this is how behind the scene works


//this is how the work via prototyping 
function Animal(name) {
  this.name = name;
}

Animal.prototype.eat = function() {
  console.log("Eating");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);

let d1 = new Dog("Tommy");
d1.eat();

