//by adding the star we make the iterator in it work as pause and resume system
//first one is the example of the generator

function* numgenrator()
{
    yield 1;
    yield 2;
    yield 3;
}
let n= numgenrator();
console.log(n.next());
console.log(n.next());


function itera() {
    let nums = [10, 20, 3];

    let it = nums[Symbol.iterator]();  // create iterator

    console.log(it.next());
}

itera();
