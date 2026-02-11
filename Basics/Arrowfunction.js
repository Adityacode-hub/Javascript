//write A function named maketea that takes one parameter that taked parameter typeof and return a string like "making green tea" when it is called with "green tea" store the result in a variable named of "teaorder"

function maketea(typeoftea)
{
    return `making ${typeoftea}`
}
let teaorder=maketea("greentea")
console.log(teaorder)


//write a function named as 'teaorder' that takes one parameter 'teatype' inside this function create another function named confirmorder that return a message like 'order confirmed for chai' call 'confirmorder'from within 'ordertea' and return the result

function ordertea(teatype)
{
    function confirmorder()
    {
        return `ORDER CONFIRMED FOR ${teatype}`;
    }
    return confirmorder();
}
let orderconfirmation=ordertea("chai")
console.log(orderconfirmation)

//write the arrow function named 'calculatetotal' that takes two parameter :'price' and 'quantity'.the function should return the total cost by multiplying the 'price' and 'quantity' store the result in a variable named 'totalcost'


//function gree(){}   this is the regular function
//const greet = ()=>{} this is the arrow function



const calculatetotal=(price,quantity)=>
     price*quantity;
let totalcost=calculatetotal(10,5)
console.log(totalcost)
//note this one liner code so there is no need to write return here still the code will learn then no need to give the curly braces also



/** 
 const testtwo =()=>{
 console.log(this)
} 
 testtwo()
it will give the window object does not ability to pass the object 
*/


//Higher order function

 //write a function named 'processteaorder' that takes another function 'maketea' as a parameter and call it with the argument "early grey" return the result of calling "maketea"

 function maketea(typeoftea)
 {
    return `maketea:${typeoftea}` //function is made  and will be passed as an argument
 }

 function processteaorder(teafunction)
 {
 return teafunction('earl grey')
 }

 let order=processteaorder(maketea) //function as a parameter
 console.log(order)


 //PASSING and receiving the function as the nested function it has the access of all the things inside the function
 function teamaker1(){
    return function(teatype)
    {
        return `MAKING:${teatype}`
    }
 }
 let crteamaker1=teamaker1();
 console.log(crteamaker1("green tea"))
 




