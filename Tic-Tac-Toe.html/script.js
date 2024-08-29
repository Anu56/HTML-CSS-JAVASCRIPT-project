const boxes = document.querySelectorAll(".box");
const Resetbtn = document.getElementById("reset");
const Newbtn = document.querySelector(".new-game");
const Mssg = document.querySelector("#msg");
 const Container = document.querySelector(".msg-container");

let turn0 = true;
WinningPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetbtn = () =>{
    turn0 = true
    enabledboxes();
    Container.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if (turn0 === true) {
            box.innerHTML = "O";
            turn0 = false; 
        }
        else{
            box.innerHTML ="X";
            turn0 = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const disabledboxes = () =>{
    for(box of boxes) {
        box.disabled = "true";
    }
};
const enabledboxes = () =>{
    for(box of boxes) {
        box.disabled = false;
        box.innerText = ""
    }
};
const showWinner = (Winner) => {
    Mssg.innerText  = `Congratulation winner is ${Winner}`;
    Container.classList.remove("hide");
}

 const checkWinner = ()=> {
   for(let pattern of WinningPatterns){
        let Pos1val = boxes [pattern[0]].innerText;
        let Pos2val = boxes [pattern[1]].innerText;
        let Pos3val = boxes [pattern[2]].innerText;

        if(Pos1val != "" && Pos2val != "" && Pos3val != ""){
            if(Pos1val === Pos2val && Pos2val === Pos3val){
                console.log("winner",Pos1val);
                disabledboxes();
                showWinner(Pos1val);
            }

        }
   }
 }
 Newbtn.addEventListener("click", resetbtn);
 Resetbtn.addEventListener("click",resetbtn);

