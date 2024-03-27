let boxes=document.querySelectorAll(".box")
let resets=document.querySelector("#reset")

 let turn0=true; //player1 player2

const winpatterns=[
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0){
            //player1
            box.innerText ="O"
            turn0=false

        }
        else{
            //player2
            box.innerText="X"
            turn0=true
        }
        box.disabled=true
    });
});
