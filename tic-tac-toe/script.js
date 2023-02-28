let btnRef = document.querySelectorAll(".button-option");
let popupRef = document.querySelector(".popup");
let newgameBtn = document.getElementById("new-game");
let restartBtn = document.getElementById("restart");
let msgRef = document.getElementById("message");
// winning pattern array:
let winningPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
];
// player X plays first:
let xTurn = true;
let count = 0;
//disabling buttons:
const disableButtons = () => {
    btnRef.forEach((element) => (element.disabled = true));
//enable popup:
    popupRef.classList.remove("hide");
};

//Enabling buttons (Restart & NewGame):
const enableButtons = () => {
    btnRef.forEach((element) => {
        element.innerText = "";
        element.disabled = false;

    });
    // popup disabling:
    popupRef.classList.add("hide");
};

//when a player wins:
const winFunction = (letter) => {
    disableButtons();

    if (letter == "X") {
        msgRef.innerHTML = "&#x1F389; <br> 'X' Wins";
    }
    else{
        msgRef.innerHTML = "&#x1F389; <br> '0' Wins";
    }
};

// DRAW
const drawFunction = () => {
    disableButtons();
    msgRef.innerHTML = "&#x1F389; <br> DRAW !";
};

// New Game
newgameBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});
restartBtn.addEventListener("click", () => {
    count = 0;
    enableButtons();
});

//logic of winning
const winChecker = () => {
    for (let i of winningPattern) {
        let [element1, element2, element3] = [
            btnRef[i[0]].innerText,
            btnRef[i[1]].innerText,
            btnRef[i[2]].innerText,
        ];
// check filled elements
// if 3 empty elements are same and would give win as would
        if (element1 != "" && (element2 != "") & (element3 != "")) {
            if (element1 == element2 && element2 == element3) {
                // if all 3 buttons have same values, then pass the value to winFunction
                winFunction(element1);
            }
        }
    }
};

// display X or O on click:
btnRef.forEach((element) => {
    element.addEventListener("click", () => {
        if (xTurn) {
            xTurn = false;
            //display X:
            element.innerText = "X";
            element.disabled = true;
        }   else {
            xTurn = true;
            //display Y:
            element.innerText = "O";
            element.disabled = true;
        }
        // increment count on each click:
        count += 1;
        if (count == 9) {
            drawFunction();
        }
        // check everytime for win
        winChecker();

    });
});
// Enabling buttons/Disabling popup:
window.onload = enableButtons;