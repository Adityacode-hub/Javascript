let obj={}
console.log(obj)
console.log(typeof obj)

let username={name :"Aditya",second_name:"Kumar"}
console.log(username)

const username1={name:"Aditya",second_name:"Kumar"}
username1.name="Anuj"
console.table(username1)


//Arrays

let anotheruser=["aditya",true]
anotheruser[0]="AMAN"
console.log(anotheruser[0])

let isValue=true
console.log(isValue+1)//output =2 bcz javascrit treat true as 1 always
console.log(Number(isValue)+1)

//checking the array is empty or not

let a=[];
if(a.length==0)
{
    console.log(true)
}
else
{
    console.log(a)
}