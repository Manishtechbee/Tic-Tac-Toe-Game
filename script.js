//alert("hello")
//console.log("Hi Lets begin with DOM")
//console.dir(document.body.firstChild)
let con=document.querySelector("main");
let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#Reset-btn");
let NewBtn=document.querySelector("#New-btn");
let msg_cont=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
const winPattern=[
    [0 , 1 , 2],
    [3 , 4 , 5],
    [6 , 7 , 8],
    [0 , 3 , 6],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [0 , 4 , 8],
    [2 , 4 , 6]
]
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkwin();
    });
});
const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msg_cont.classList.add("hide")
}
const disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText=""
    }
}
const showWin=(winner)=>{
    disableBoxes();
    resetBtn.disabled=true
    con.classList.add("hide");
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msg_cont.classList.remove("hide")
    
}
const checkwin=()=>{
    let hasWinner=false;
    for(pat of winPattern){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                showWin(pos1);
                hasWinner = true; 
                break;
            }
        }
        
        
    }
    if (!hasWinner) { 
        let isDraw = true;
         for (let box of boxes) { 
            if (box.innerText === "") { 
                isDraw = false;
                 break; } } 
                 
                 if (isDraw) { 
                    con.classList.add("hide");
                    msg.innerText = "It's a draw!";
                    msg_cont.classList.remove("hide"); } }
    
    
}

resetBtn.addEventListener("click",resetgame);
NewBtn.addEventListener("click",()=>{
    turnO=true;
    enableBoxes();
    msg_cont.classList.add("hide")
    resetBtn.disabled=false;
    con.classList.remove("hide");
});
