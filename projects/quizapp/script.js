document.addEventListener("DOMContentLoaded",()=>{
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
   const options= document.getElementById("choices-list");
   const resultcontainer=document.getElementById("result-container");
   const quizscore= document.getElementById("score");
    const startbtn=document.getElementById("start-btn");
     const nextbtn=document.getElementById("next-btn");
        const restartbtn=document.getElementById("restart-btn");

        //this is the question array
        const quiz=[]
        //this contains the list of the questions
      const quizquestion=[
            {
                id:Date.now(),
                question:"WHO IS THE PRESIDENT OF INDIA",
                options: [
   "RAJENDRA PRASAD",
   "NARENDRA MODI",
   "DRAUPADI MURMU",
   "MANMOHAN SINGH"
]

                ,
                answer:2
            }
            ,
            {
                id:Date.now(),
                question:"WHO IS THE FATHER OF C++ LANAGUAGE ?",
                options:[
                    "CHARLES BABBAGE",
                    "DENNIS RITCHIE",
                    "BJAIRAINE STROUSTROUP",
                    "GUDDIE VON ROUSSAM"
                ],
                answer:2
            },
            {
                  id:Date.now(),
                question:"WHERE IS THE  EASTERN COMMAND OF ARMY IS LOCATED ?",
                options:
                [
                    "KOLKATA",
                    "JAIPUR",
                    "CHANDIMANDIR",
                    "SHIMLA"
                ],
                answer:0
            },
            {
                  id:Date.now(),
                question:"WHAT IS THE NAME OF THE SPECIAL AGENCY OF THE U.K ?",
                options:[
                    "RAW",
                    "ISI",
                    "KGB",
                    "MI-6"
                ],
                answer:3
            }

    ]
quiz.push(...quizquestion);//pushing in the quiz array all questions

let currentindex=0;//track the question
let score=0;
startbtn.addEventListener("click",()=>{
    startbtn.classList.add("hidden");//hide the start button when u click the startbutton
    questionContainer.classList.remove("hidden");//visible
    currentindex=0;
    score=0;
    showQuestion();
})






function showQuestion()
{
    nextbtn.classList.add("hidden");

    options.innerHTML="";//clear old options

    const currentquestion=quiz[currentindex];

    questionText.textContent=currentquestion.question;
    //using id questiontext which holds id=question-text
    //toh yaha current question mei quiz question ko trace kar lega i.e on which question we are at actually

    currentquestion.options.forEach((option,index)=>{
        const li=document.createElement("li");
        const button=document.createElement("button");
        button.textContent=option;//option is now kept in the button
        button.addEventListener("click",()=>{
            selectAnswer(index);
        });
        li.appendChild(button);//button is inside the li 
        options.appendChild(li);//li is inside the options
        
    });
}





function selectAnswer(selectIndex)
{
    const correctIndex=quiz[currentindex].answer;
    if(selectIndex===correctIndex)
    {
        score++;
    }
    nextbtn.classList.remove("hidden");//visible
    const buttons=options.querySelectorAll("button");//queryselector for all button
    buttons.forEach(btn=>btn.disabled=true);//loop through each btn make multiple click banned
}




nextbtn.addEventListener("click",()=>{
    currentindex++;
    if(currentindex<quiz.length)
    {
        showQuestion();
    }
    else{
        showResult();
    }
});





function showResult()
{
    questionContainer.classList.add("hidden");
    resultcontainer.classList.remove("hidden");
    quizscore.textContent=`${score}/${quiz.length}`;
    
}




restartbtn.addEventListener("click",()=>{
    resultcontainer.classList.add("hidden");//invisible
    startbtn.classList.remove("hidden");//visible
})

})