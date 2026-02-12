//encapsulation

class bankaccount
{
    #balance=0;//something like private method encapsulation is used here
    deposit(amount)
    {
        this.#balance+=amount;
        return this.#balance;
    }
    getbalance()
    {
        return `$ ${this.#balance}`;
    }
}
let account=new bankaccount();
console.log(account.getbalance());

//Abstraction

class coffemachine
{
 start()
 {
    return `something the machine.....`;
 }
 brewcoffee()
 {
    return `Brewing Coffee`;
 }
 pressbutton(){
   let message1= this.start();
    let message2=this.brewcoffee();
    return `msg${message1}--${message2}`;
 }
}
let machine=new coffemachine()
// console.log(machine.start());
// console.log(machine.brewcoffee());
console.log(machine.pressbutton())



//polymorphism  many forms method name is same but the internal work is different

class Bird
{
    fly()
    {
        return `i am flying......`;
    }
}
class Penguin extends Bird
{
    fly()
    {
        return `i do not fly.......`;
    }
}
let bird=new Bird();
let penguin=new  Penguin()
console.log(bird.fly());
console.log(penguin.fly());


//static the method which is called only by the classname

class calculator
{
    static add(a,b)
    {
        return a+b;
    }
}
console.log(calculator.add(4,5));


