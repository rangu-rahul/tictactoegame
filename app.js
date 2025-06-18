let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true; 

const winPatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

};

boxes.forEach((box) =>{
    box.addEventListener("click" , () =>{
        console.log("box waas clicked");
        if(turnO){  //playerO
            box.innerText = "O";
            turnO = false;
            //document.querySelector(".box").style.backgroundColor("pink");
           
        }else{   //playerx
            box.innerText = "X";
            turnO = true;
            //document.querySelector(".box").style.backgroundColor("red");
            
        }
        box.disabled = true;
       
        checkWinner();
       
        
    });
});



//disabledboxes
const disableBoxes = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

//anableboxes
const enableBoxes = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("winner" ,pos1);
                showWinner(pos1);
            }
        }
    }
};


//clickable
newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);




