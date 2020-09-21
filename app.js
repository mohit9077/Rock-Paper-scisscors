
let userScore=0;
let computerScore=0;

const userScore_span=document.getElementById("user-score");
const compScore_span=document.getElementById("comp-score");

const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result>p") // result is present in p tag


const rock_div=document.getElementById("r")
const paper_div=document.getElementById("p")
const scissor_div=document.getElementById("s")



function getcompchoice()    // for getting computer choices randomly
{
   const choices=['r','p','s'];
   const randomchoice=Math.floor(Math.random()*3);
   return choices[randomchoice];

}


function convertToword(letter)
{
    if(letter=="r") return "Rock";
    if(letter=="p") return "Paper";
    return "Scissors";

}

function win(user,computer)
{   userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=computerScore;
    const smallword="user".fontsize(3).sub()
   const compsmallword="comp".fontsize(3).sub()
   result_div.innerHTML=`${convertToword(user)}${smallword} beats  ${convertToword(computer)}${compsmallword} . You Win!`;
   document.getElementById(user).classList.add('green-glow');

   setTimeout(function() {document.getElementById(user).classList.remove('green-glow')},500)
}


function lose(user,computer)
{
  
    computerScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=computerScore;
    const smallword="user".fontsize(3).sub()
   const compsmallword="comp".fontsize(3).sub()
   result_div.innerHTML=`${convertToword(user)}${smallword} loses to ${convertToword(computer)}${compsmallword} . You loose!`;
   document.getElementById(user).classList.add('red-glow');

   setTimeout(function() {document.getElementById(user).classList.remove('red-glow')},500)
   
}

function draw(user,computer)
{
    
    const smallword="user".fontsize(3).sub()
   const compsmallword="comp".fontsize(3).sub()
   result_div.innerHTML=`${convertToword(user)}${smallword} equals ${convertToword(computer)}${compsmallword} . Its a draw`;

   document.getElementById(user).classList.add('gray-glow');

   setTimeout(function() {document.getElementById(user).classList.remove('gray-glow')},300)
}


function game(userchoice)
{
    const compchoice=getcompchoice();
    
   // console.log("user choice => " + userchoice);
    // console.log("computer choice => "+ compchoice);

    switch(userchoice+compchoice){

        case "rs":
        case "pr":
        case "sp":
            win(userchoice,compchoice);
            break;

        case "rp":
        case "ps":
        case  "sr":
            lose(userchoice,compchoice);
            break;

        case "rr":
        case "pp":
        case  "ss":
            draw(userchoice,compchoice);
            break;

    }
}

function main(){
    rock_div.addEventListener('click' , function(){
    game("r")
    })

    paper_div.addEventListener('click' , function(){
        game("p")
        })

    scissor_div.addEventListener('click' , function(){
        game("s")
        })

}

main();