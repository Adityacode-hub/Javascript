document.addEventListener("DOMContentLoaded",()=>{
const todoinput=document.getElementById("todo-input");
const addtaskbutton=document.getElementById("add-task-btn");
const todolist=document.getElementById("todo-list");
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];//it will give me the array of the empty list if nothing is present
tasks.forEach(task => {rendertask(task)   
});

addtaskbutton.addEventListener("click",()=>{
    const tasktext=todoinput.value.trim()
    if(tasktext==="")return;
    const newtask={
        id:Date.now(),
        text:tasktext,
        completed:false 
    }
    tasks.push(newtask);
    savetask();//it will go to the local storage
    rendertask(newtask);
    todoinput.value=""
    console.log(tasks)
});

function rendertask(task)
{  
    // console.log(task.text);
    const li=document.createElement("li")
    li.setAttribute("data-id",task.id)//new attirubte is given to target it for future and adding to the inner html
    if(task.completed) li.classList.add("completed")
    li.innerHTML=`<span>${task.text}</span>          
    <button>delete</button>`
    todolist.appendChild(li);
    li.addEventListener("click",(e)=>{
        if(e.target.tagName==="BUTTON")return;
        task.completed=!task.completed
        li.classList.toggle("completed")
        savetask();
    });
    li.querySelector("button").addEventListener("click",(e)=>{
        e.stopPropagation()//this is to prevent the toggle from firing
        tasks = tasks.filter((t) => t.id !== task.id);
        li.remove();//remove from the ui
        savetask();
    })
   
}
//moving from array to local storage
function savetask()
{
    localStorage.setItem('tasks',JSON.stringify(tasks));//setItem and json.stringify
}


})


