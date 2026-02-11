function Person(name,age)
{
    this.name=name;
    this.age=age;
}
let p1=new Person("Aditya",21)
console.log(p1.name)
console.log(p1.age)

class Person1
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
let p2=new Person1("ANUJ",18)
console.log(p2)


class Student
{
    constructor(name,section)
    {
        this.name=name;
        this.section=section
    }
}
let k=new Student("Aman","F")
console.log(k)
k=null;//for cleaning manually because here engine cleans manually


//functional constructor

function student3(name,age)
{
    this.name=name;
    this.age=age;
    this.greet=function()
    {
        console.log("hello"+this.name);
    };
}
let s1=new student3("Aditya ",22);
s1.greet()


// Prototyping in JavaScript is a mechanism by which objects inherit properties and methods from other objects through the prototype chain.


function Stu(name, age)
{
    this.name = name;
    this.age = age;
}

Stu.prototype.greet = function()//constructor with the prototype
{
    console.log("Hello " + this.name);
};

let a1=new Stu("AJIT",33);
a1.greet()


// Prototype ek shared storage hai jahan common methods rakhe jaate hain jo sab objects use kar sakte hain.

//Change Prototype Dynamically

function Stud(name)
{
    this.name = name;
}

let a2 = new Stud("AJIT");

let newProto = {
    greet() {
        console.log("Hi " + this.name);
    }
};

Object.setPrototypeOf(a2, newProto);

a2.greet();


// checking whether the things we are creatig object with the new keyword or something else

function Drink(name)
{
    if(!new.target)
    {
        throw new Error("Drink must be called withe the new keyword");
    }
    this.name = name;
}

let tea = new Drink("tea");
let coffee = Drink("coffee");//it will give the error that Drink should be called with the new 
