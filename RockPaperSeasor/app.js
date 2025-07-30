let score = JSON.parse(localStorage.getItem('score')) || {
    you : 0,
    comp : 0,
};


let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let seasor = document.querySelector('#seasor');

rock.addEventListener('click',()=>{
    let usr = 1;
    let cmp = getComChoice();
    let res = getResult(usr,cmp);
        document.querySelector('.resultbox').style.display="flex";
        document.querySelector('#result').innerText = res;
        document.querySelector('#you').innerText=score.you;
        document.querySelector('#comp').innerText=score.comp;
    
});
paper.addEventListener('click',()=>{
    let usr = 2;
    let cmp = getComChoice();
    let res = getResult(usr,cmp);
    document.querySelector('.resultbox').style.display="flex";
    document.querySelector('#result').innerText = res;
    document.querySelector('#you').innerText=score.you;
    document.querySelector('#comp').innerText=score.comp;
});

seasor.addEventListener('click',()=>{
    let usr = 3;
    let cmp = getComChoice();
    let res = getResult(usr,cmp);
    document.querySelector('.resultbox').style.display="flex";
    document.querySelector('#result').innerText = res;
    document.querySelector('#you').innerText=score.you;
    document.querySelector('#comp').innerText=score.comp;
});

function getComChoice(){
    let cmp = Math.random()*3;
    return cmp;
}
function getResult(user,cmp){
    let res;
    if(cmp>0 && cmp <= 1) cmp = 1;
    else if(cmp > 1 && cmp <= 2) cmp = 2;
    else if(cmp > 2 && cmp <= 3) cmp = 3;

    if(user===cmp){
        res = `You both choosed the same
        It's a draw!`;
    }
    else if(user===1 && cmp===2){
        res = `Computer choosed Paper
        Computer won! Paper beats rock`;
        score.comp++;
    }
    else if(user===1 && cmp===3){
        res = `Computer choosed Scissor
        You won! Rock beats scissor`;
        score.you++;
    }

    else if(user===2 && cmp===1){
        res = `Computer choosed Rock
        You won! Paper beats rock`;
        score.you++;
    }
    else if(user===2 && cmp===3){
        res = `Computer choosed Scissor
        Computer won! Scissor beats paper`;
        score.comp++;
    }
    else if(user===3 && cmp===1){
        res = `Computer choosed Rock
        Computer won! Rock beats scissor`;
        score.comp++;
    }
    else if(user===3 && cmp===2){
        res = `Computer choosed Paper
        You won! Scissor beats paper`;
        score.you++;
    }
    localStorage.setItem('score',JSON.stringify(score));
    return res;
}
document.querySelector('#reset').addEventListener('click',()=>{
    localStorage.clear();
    score.you=0;
    score.comp=0;
    document.querySelector('#you').innerText=score.you;
    document.querySelector('#comp').innerText=score.comp;
    document.querySelector('.resultbox').style.display="none";
    document.querySelector('#result').innerText="";
});