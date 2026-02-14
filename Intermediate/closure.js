
//special type of the function which actually retains the function
function outer()
{
    let counter=4;
    return function()
    {
        counter++;
        return counter
    }
}
let increment=outer()
console.log(increment());
console.log(increment());
console.log(increment());



// A function remembers variables from its outer scope
// even after the outer function has finished executing.


// 📦 Real-life analogy

// Think of a school bag 🎒

// Function = Student

// Variables = Books inside bag

// Even after leaving classroom,
// student still carries the books.