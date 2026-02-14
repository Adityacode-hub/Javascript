//example 1
//evrytime we have to select the element first #->id . ->class  
//addEventListener('even',function) we have to put inside it here if we use the function then it will give the current context else will give the global object upon using the arrow function

//we are listening to the element and we are grabing the element

document.getElementById("changeTextButton").addEventListener("click",function ()
{
    // console.log(this);//this is the current context
    let paragraph=document.getElementById("myParagraph");
    // console.log(paragraph); textContent gives the text content
    paragraph.textContent="the paragraph is changed";
});


//example 2 teaversing the dom
document.getElementById("highlightFirstCity").addEventListener("click",function()
{
   let citilist= document.getElementById("citiesList");
//    console.log(citilist.firstElementChild);
// console.log(citilist.firstElementChild.classList);
citilist.firstElementChild.classList.add("highlight");//we are adding the css class in it
}
)

//example 3

document.getElementById("changeOrder").addEventListener("click",function()
{
   let coffeeType=document.getElementById("coffeeType");
   coffeeType.textContent="Espresso";
   coffeeType.style.backgroundColor="brown";
    coffeeType.style.backgroundColor="5px 0 0 1px";
})

//example 4  creating the new element and inserting it

document.getElementById("addNewItem").addEventListener("click",function()
{
    let newitem=document.createElement('li');//new element with the name as newitem
    newitem.textContent="Eggs";
    document.getElementById("shoppingList").appendChild(newitem);
})

//example 5 removing the dom element 

document.
getElementById("removeLastTask")
.addEventListener("click",function()
{
    let taskList=document.getElementById("taskList");
  taskList.lastElementChild.remove();//grabing the last element  
});


//example 6
document.getElementById("clickMeButton").addEventListener("dblclick",function()
{
    alert("this is clicked");
});


//example 7 event deligation click on any tea to select it 

document.getElementById("teaList").addEventListener("click",function(event)
{
//'' for id '.' for class in the event target
if(event.target&&event.target.matches('.teaItem'))
{
alert("you selected:"+event.target.textContent)
}
})
//example 8 form handling

document.getElementById("feedbackForm").addEventListener('submit',function(event)
{
    event.preventDefault();//using the default value
    let feedback=document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent=`feedback is ${feedback}`;
})

//example 9 Dom content Loaded

document.addEventListener("DOMContentLoaded",function()
{   
    //first method by chaining
    // document.getElementById("domStatus").textContent="DOM FULLY LOADED";
    //second by making the variable
    let TEXT= document.getElementById("domStatus");TEXT.textContent="DOM FULLY LOADED";
})

//example 10 css manupulation

document.getElementById("toggleHighlight")
  .addEventListener("click", function() {
    let desctext =
      document.getElementById("descriptionText");

    desctext.classList.toggle("highlight");//adding the classlist
});

