//inheritance of the class

class Vehicle
{
    constructor(make, model)
    {
        this.make = make;
        this.model = model;
    }

    start()
    {
        return `${this.model} is a car from ${this.make}`;
    }
}

class Car extends Vehicle //inheritance via extends
{
    constructor(make, model, price)
    {
        super(make, model);   // ✅ call parent constructor
        this.price = price;
    }

    drive()
    {
        return `${this.make}: this is the inheritance example`;
    }
}

let mycar = new Car("Toyota", "Corolla", 10000000);

console.log(mycar);
console.log(mycar.start());
console.log(mycar.drive());



