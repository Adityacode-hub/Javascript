function fetchpostdata()
{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve ("post data fetched");
      },2000);
    })
}

function fetchcommitdata()
{
    return new Promise((resolve)=>{
   setTimeout(()=>{
    resolve("commited in the db successfully");
   },2000);
    })
}

async function getdata(){
    try{
   console.log("fetching the  blog data");
//    const blogdata=await fetchpostdata();
//     const commitdata=await fetchcommitdata();

const[blogdata,commitdata]=await Promise.all([fetchpostdata(),fetchcommitdata()]);//this is the online for the async and await use



//single liner statement for this problem

    console.log("postdata:",blogdata);
    console.log("commit_data:",commitdata);

    
    console.log("fetched complete");
    }
    catch(error){
 console.log("error is not good",error);
    }
}

getdata();