document.addEventListener("DOMContentLoaded",()=>{
    const todoinput=document.getElementById("todo-input");
const addtaskbutton=document.getElementById("add-task-btn");
const todolist=document.getElementById("todo-list");
let tasks=JSON.parse(localStorage.getItem("tasks"))||[];//it will give me the array of the empty list if nothing is present
tasks.forEach(task => {rendertask(task)   
});

addtaskbutton.addEventListener("click",()=>{
    const tasktext=todoinput.value.trim();
    if(tasktext==="")return;
    const newtask=
    {
       id: Date.now(),
        text: tasktext,
        completed: false
    }
    tasks.push(newtask);
    savetask();
    rendertask(newtask);
    console.log(tasks);
})
function rendertask(task)
{
 const li=document.createElement("li");
 li.setAttribute("data-id",task.id);
 if(task.completed)
 {
    li.classList.add("completed");
 }
 li.innerHTML=`<span>${task.text}</span>
 <button>delete</button>
 `
todolist.appendChild(li);

li.addEventListener("click",(e)=>{
    if(e.target.tagName==="BUTTON")return;//which is button is going to be clicked is the main thing to be kept in mind
    task.completed = !task.completed;//true ko false aur false ko true karega
       li.classList.toggle("completed");
       savetask();
   

});
//delete
 li.querySelector("button").addEventListener("click",(e)=>{
      e.stopPropagation();//stop from toggling back to back
      //it will stop from going to the parent
      tasks=tasks.filter((t)=>t.id!==task.id);
      li.remove();
      savetask();
    })
}
function savetask()
{
localStorage.setItem("tasks",JSON.stringify(tasks));
}
})

//       const index = tasks.findIndex(t => t.id === task.id);
// tasks.splice(index, 1); this is the method to delete from the arrays
