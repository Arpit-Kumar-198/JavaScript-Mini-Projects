let savedScore = JSON.parse(localStorage.getItem('score'));
let score = (savedScore && typeof savedScore.win === 'number' && typeof savedScore.loss === 'number' && typeof savedScore.tie === 'number')
    ? savedScore
    : { win: 0, loss: 0, tie: 0 };




    function getComChoice(){
        let rndNum = Math.random() * 3;
        let comChoice;

        if(rndNum > 0 && rndNum <= 1){
            comChoice = 'Bat';
        }
        else if(rndNum > 1 && rndNum <= 2){
            comChoice = 'Ball';
        }
        else{
            comChoice = 'Stump';
        }

        return comChoice;
    }
function getResult(userChoice,comChoice){
    let res;
    if(userChoice === 'Bat'){

        if(comChoice === 'Ball'){
            res = 'User won';
            score.win++;
        }
        else if(comChoice === 'Stump'){
            res = 'Computer won';
            score.loss++;
        }
        else {
            res = `It's a tie`;
            score.tie++;
        }
    }

    else if(userChoice === 'Ball'){

        if(comChoice === 'Stump'){
            res = 'User won';
            score.win++;
        }
        else if(comChoice === 'Bat'){
            res = 'Computer won';
            score.loss++;
        }
        else {
            res = `It's a tie`;
            score.tie++;
        }
    }

    else{
        if(comChoice === 'Bat'){
            res = 'User won';
            score.win++;
        }
        else if(comChoice === 'Ball'){
             res = 'Computer won';
             score.loss++;
        }
        else {
            res = `It's a tie`;
            score.tie++;
        }
    }
    localStorage.setItem('score',JSON.stringify(score));
    document.querySelector('#user-mov').innerText = `You have choosen ${userChoice}`;
    document.querySelector('#com-mov').innerText = `Computer choice is ${comChoice}`;
    document.querySelector('#result').innerText = `${res}`;
    document.querySelector('#score').innerText = `Win: ${score.win} , Loss:${score.loss} , Tie:${score.tie}`;
    
    
}