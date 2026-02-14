function sayhello()
{
    console.log("i would like to say hello!");
}

setTimeout(()=>{
 sayhello();
},2000);
//this part of the code executes first and then it afterward callback will be called
 
for(let index=0;index<=5;index++)
{
    console.log(index);
}

//evrytime the function is loaded in thecall stack then it goes to the even loop then the browser see whether it call the eventloop then the queue executes and checkes whether is any thing remained to see something inside the queue or not 