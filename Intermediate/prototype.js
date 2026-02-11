//extra properties  and functionality given to any function or variable is known as prototype

// Prototype ek shared storage hai jahan common methods rakhe jaate hain jo sab objects use kar sakte hain.

let computer={cpu:12}
let lenovo={
    screen:"HD",
    __proto__:computer //i want to access all the properties regarding to this computer
}
let tomhardware={}
// console.log(computer,computer.__proto__)//we are accessign using the dunder __proto__
console.log(lenovo,lenovo.__proto__)//it will acquire the properties of the computer

// let genericcar={tyres:4}
// let tesla={
//     driven:"AI",
//     __proto__:genericcar
// }
// console.log(tesla,tesla.__proto__)


let genericcar={tyres:4}
let tesla={
    driven:"AI",  
}
Object.setPrototypeOf(tesla,genericcar);//it is method for setting the thing explicitly
console.log(`tesla`,genericcar)
console.log(`tesla`,tesla.tyres)

//hasOwnProperty() to see whether the object has it own property or not






