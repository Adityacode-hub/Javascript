```javascript

1️⃣ Function Prototype — Used when creating many objects

User objects

Product objects

Game players

Bank accounts

example :-
function User(name) {
  this.name = name;
}

User.prototype.login = function() {
  console.log(this.name + " logged in");
};

let u1 = new User("Aditya");
let u2 = new User("Rahul");


2️⃣ Object Literal Prototype — Used for quick linking

let animal = {
  eats: true
};

let dog = {
  barks: true
};

Object.setPrototypeOf(dog, animal);

3️⃣ Object.create() — Used for clean prototype control
let person = {
  greet() {
    console.log("Hello");
  }
};

let student = Object.create(person);
student.name = "Aditya";


4️⃣ Class Prototype — Used in modern development

class Car {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log("Driving " + this.brand);
  }
}

//behind scene
Car.prototype.drive

----------------------------------
//Decision Tree
----------------------------------
Creating many objects?
 → Function prototype / Class

Need modern syntax?
 → Class

Link existing objects?
 → Object literal / Object.create

Need safe inheritance?
 → Object.create

Extending JS built-ins?
 → Built-in prototype
