let turn = true;
let globalCheck = false;
let size = 0;
let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

    boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(globalCheck) return;
        if(turn){
            box.innerText = "O";
            turn = false;
            // box.style.backgroundColor="blue";
            box.style.color="green";
            size++;
        }
        else{
            box.innerText = "X";
            turn = true;
            // box.style.backgroundColor="red";
            box.style.color="blue";
            size++;
        }
        box.disabled=true;
        checkWinner();
    });
});

resetbtn.addEventListener('click',()=>{
    for(let i=0; i<9; i++){
        boxes[i].innerText="";
        boxes[i].style.backgroundColor = "bisque"; 
        boxes[i].disabled = false; 
    }
    turn = true;
    globalCheck = false;
    size = 0;
});

function checkWinner(){
let check = false;
for(let each of winPattern){
if(
    boxes[each[0]].textContent !== '' &&
    boxes[each[0]].textContent === boxes[each[1]].textContent &&
    boxes[each[1]].textContent === boxes[each[2]].textContent
){
    showPopup(`Player ${boxes[each[0]].textContent} wins! 🎉`);
    check = true;
    globalCheck = true;
    break;
}
}
if(check === false && size === 9){
showPopup(`It's a draw! 😐`);
globalCheck = true;
}
}

function showPopup(message) {
const popup = document.getElementById("popup");
const popupMsg = document.getElementById("popup-message");
popupMsg.textContent = message;
popup.style.display = "flex";
}

document.getElementById("close-popup").addEventListener("click", () => {
document.getElementById("popup").style.display = "none";
});