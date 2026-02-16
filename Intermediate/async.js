function fetchdata()
{
   return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:"Aditya",url:"http// coffee.com"})
        },3000);
    })
}
async function getuserdata() {
    try{
        console.log(`fetching the user data....`);
        const userdata=await fetchdata();
        console.log("user data:",userdata);
    }
    catch(error)
    {
        console.log("error in fetching the data",error);
    }
    
}
getuserdata();
