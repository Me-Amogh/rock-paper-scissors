let rock = document.getElementById('rock')
let scissor = document.getElementById('scissors')
let paper = document.getElementById('paper')
let btn = document.getElementById('play')
let reset = document.getElementById('reset')

let compScore = 0;
let userScore = 0;

let compUpdate = document.getElementById('compscore');
let userUpdate = document.getElementById('userscore');

let choose = ['rock', 'paper' , 'scissor'];

reset.addEventListener('click',abc)

function abc(){
    btn.innerText ='';
    compScore=0;
    userScore=0;
    compUpdate.innerText=0;
    userUpdate.innerText=0;
}


function checkwin(){
    if(compScore==10){
        alert("COMPUTER WON");
        abc();
    }
    else if(userScore==10){
        alert("YOU WON");
        abc();
    }
}

function chooseone(){
    let idx = Math.floor(Math.random()*3);
    console.log(choose[idx]);
    return choose[idx];
}

rock.addEventListener('click',()=>{
    btn.innerText ='';
    let choosed = chooseone();
    let a = 'rock';
    if(a==choosed){
        btn.innerText =' match is draw';
    }
    else{
        if(choosed=='paper'){
            btn.innerText = 'computer won'
            compScore++;
            compUpdate.innerText=compScore;
        }
        else{
            btn.innerText = 'You won ';
            userScore++;
            userUpdate.innerText=userScore;
        }
    }
    checkwin();
})

paper.addEventListener('click',()=>{
    btn.innerText ='';
    let choosed = chooseone();
    let a = 'paper';
    if(a==choosed){
        btn.innerText =' match is draw';
    }
    else{
        if(choosed=='scissor'){
            btn.innerText = 'computer won'
            compScore++;
            compUpdate.innerText=compScore;
        }
        else{
            btn.innerText = 'You won ';
            userScore++;
            userUpdate.innerText=userScore;
        }
    }
    checkwin();
})

scissor.addEventListener('click',()=>{
    btn.innerText ='';
    let choosed = chooseone();
    let a = 'scissor';
    if(a==choosed){
        btn.innerText =' match is draw';
    }
    else{
        if(choosed=='rock'){
            btn.innerText = 'computer won'
            compScore++;
            compUpdate.innerText=compScore;
        }
        else{
            btn.innerText = 'You won ';
            userScore++;
            userUpdate.innerText=userScore;
        }
    }
    checkwin();
})

