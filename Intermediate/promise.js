function fetchdata()
{ //promise is made with new Promise
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success)
            {
                resolve("data fetched successfully");
            }
            else
            {
                reject("error in fetching data");
            }
        },1000);
    });
    //total setTimeout is a callback
}
//always collected with then and catch
fetchdata().
then((data)=>{
console.log(data);
return data.toUpperCase();
})
.then((value)=>{
console.log(value);
})
.catch((error)=>{
console.log(error);
});
