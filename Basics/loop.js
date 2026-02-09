//back count down

let countdown=[];
let i=5;
while(i>=0)
{
    countdown.push(i);
    i--;
}
console.log(countdown)
process.stdout.write(JSON.stringify(countdown)) //THIS IS THE NODE LOGIC TO IT IS JUST LIKE COUNTDOWN.TOSTRING()
console.log("\n")

//do while
let total=0
let k=1;
do{
    total+=k;
    k++;
}while(k<=3)
    console.log(total)

    //for loop
    let multiplied=[];
    let array=[2,4,6]
    let j=0;
    for(j;j<array.length;j++)
    {
          multiplied.push(array[j]*2);
    }
    console.log(multiplied)

//for
let cities=["Paris","New York","Tokyo","London"]
const citylist=[]
let l=0;
for(l;l<cities.length;l++)
{ 
   citylist.push(cities[l]);
}
console.table(citylist)

// write a for loop through which the array ['green tea , black tea,chai,oolong tea] stop when you find chai store all teas before chai in a new array named selectedteas

let menu=["green tea","black tea","chai","oolong tea"]
let c=0;
const selectedteas=[];
for(c;c<menu.length;c++)
{

    if(menu[c]!="chai")
    {
        selectedteas.push(menu[c]);
    }
    else{
        console.log(`FOUND CHAI AT INDEX ${c}`)
        break;
    }
  
}
console.log(selectedteas)


//some another challaenges

let countries=["London","New York","Paris","Berlin"]
let count=0;
const visitedcountries=[];
for(count;count<countries.length;count++)
{
    if(countries[count]!="Paris")
    {
        visitedcountries.push(countries[count])
    }
    else
    {
            continue;
    }
}
console.log(visitedcountries)


//for-of

let arrays=[1,2,3,4,5]
let smallnumber=[]

for(const d of arrays)//it just work as an iterator
{
   if(d!=4)
   {
    smallnumber.push(d)
   }
   else
   {
    break;
   }
}
console.log(smallnumber)


//use a for-of to iterate through the array ["chai","greent tea","herbal tea","black tea"] and skip "herbal tea"

let CHAI=["chai","green tea","herbal tea","black tea"];
const preferedtea=[];
for(let chi of CHAI)
{
    if(chi!="herbal tea")
    {
         preferedtea.push(chi)
    }
    else
    {
        continue;
    }
  
}
console.log(preferedtea)

//for-in loop

let citi={
    "Egypt":900000,
    "France":2000000,
    "Berlin":100000,
    "Tokiyo":40000,

}

const cityPopulation={}
for(const keys in citi)
{
   if(keys=="Berlin")
   {
    continue;
   }
   cityPopulation[keys]=citi[keys]
}
console.log(cityPopulation)

//for-each loop
//by using the arraw function
let teacollections=["green tea","early tea","oolong tea","chai"]
let available=[]
teacollections.forEach((tea)=>{
    console.log(tea)
})

//for-each loop with the specific condition to stop when it is required
//using function
let teacollections1=["green tea","early tea","oolong tea","chai"]
let available1=[]
teacollections.forEach(function(tea){
    if(tea==="chai")
    {
        return ;
    }//this is the stopping condition
available1.push(tea)
})
console.log(available1)

//foreach using the arrow function

let myworldcities=["Berlin","Tokyo","Sydney","Paris"]
let travelledcities=[]
myworldcities.forEach(cities=>{
    if(cities==="Sydney")
    {
        return;
    }
    travelledcities.push(cities)

})
console.log(travelledcities)

