const Person=
{
    name:"Aditya",
    greet(){
        console.log(`hi,i am ${this.name}`);
    },
}
Person.greet();//this will work
const greetFunction=Person.greet 
greetFunction()//this will give as undefined

const boundgreet=Person.greet.bind({name:"aditya"});
boundgreet();//this will fix the  context

//bind call and apply



// bind() → Lock this 🔒
// call() → Run now ⚡
// apply() → Run now (array args)
