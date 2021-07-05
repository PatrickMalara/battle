/**
 * So our board is 8 by 8, this is determined by the **width** and **height** consts
 * */

const b = `RHBQKBHRPPPPPPPP................................pppppppprhbkqbhr`;

const pieces = ["P", "H", "B", "R", "Q", "K"];

let bArray = []; // The Array version of b.... im expecting to store our board as a string in the database 


const width = 8;
const height = 8;
const offset = 1; // This is because there is a <br> that we create for the UI board


const team1 = {
    name: "Team 1",
    class: "team1",
    color: "purple"
}

const team2 = {
    name: "Team 2",
    class: "team2",
    color: "green"
}

let gSelectedPiece = undefined;
let gTurn = team1;

// UI DOM Elements
let root = document.querySelector(":root");
let board = document.getElementById("board");
let boardContainer = document.getElementById("board-container");
let animator = document.getElementById("animator");
let debug = document.getElementById("debugger");
let turnUI = document.getElementById("turn");

window.addEventListener("click", boardClicked);

/**
 * params
 *      coord {Object} expected Structure - { x: 2, y: 8 }
 * */
const move = function (coord) {

    console.log("Start", gSelectedPiece);

    if (gSelectedPiece === undefined) {        // Meaning has the user already selected a piece?

        console.log("Character Clicked: ", b.charAt(coord.y * width + coord.x));

        if (bArray[coord.y * width + coord.x] !== '.') {

            const currentlyClickedPiece = board.childNodes[coord.y * (width + offset) + coord.x];
            if ((currentlyClickedPiece.classList.contains("team2") ? "team2" : "team1") !== gTurn.class) {
                return;
            }

            gSelectedPiece = {
                piece: bArray[coord.y * width + coord.x],
                x: coord.x,
                y: coord.y,
                team: currentlyClickedPiece.classList.contains("team2") ? team2 : team1
            };

            currentlyClickedPiece.classList.add("selected");

            debug.innerHTML += "<pre> Selected Piece: " + JSON.stringify(gSelectedPiece, null, 4) + "</pre>";

            //move the animator to the clicked cell
            const goFromPos = getElementPosition(currentlyClickedPiece);
            root.style.setProperty('--animX', goFromPos.x + "px");
            root.style.setProperty('--animY', goFromPos.y + "px");
        }

    } else {
        // Update the Dom Board
        const clickedPieceEl = board.childNodes[coord.y * (width + offset) + coord.x];
        const selectedPieceEl = board.childNodes[gSelectedPiece.y * (width + offset) + gSelectedPiece.x];

        // Make sure the user cant move on itself.... :(   | unless we want to add the ability for a character to consumer its teammate for power? "THONK!?"
        if ((coord.x === gSelectedPiece.x && coord.y === gSelectedPiece.y) || clickedPieceEl.classList.contains(gSelectedPiece.team.class) === true) {
            deselectPiece();
            return;
        }

        //show the animator and make it mimic the peice that is moving
        const goToPos = getElementPosition(clickedPieceEl);
        animator.classList.remove("hidden");
        animator.innerHTML = gSelectedPiece.piece;
        animator.classList.add(gSelectedPiece.team.class);

        //move the animator
        root.style.setProperty('--animX', goToPos.x + "px");
        root.style.setProperty('--animY', goToPos.y + "px");

        //clear the cell that was selected
        selectedPieceEl.innerHTML = ".";
        selectedPieceEl.classList.add("emptyCell");
        selectedPieceEl.classList.remove("selected");
        selectedPieceEl.classList.remove(gSelectedPiece.team.class);

        const piece = gSelectedPiece;//for use within the timeout function

        //after the animation is done, hide the animator, and populate the cell with the right piece and color
        setTimeout(function () {
            animator.classList.add("hidden");
            animator.innerHTML = "";

            clickedPieceEl.innerHTML = piece.piece;
            clickedPieceEl.classList.remove("team1");
            clickedPieceEl.classList.remove("team2");
            clickedPieceEl.classList.remove("emptyCell");
            clickedPieceEl.classList.add(piece.team.class);
        }, 200);


        // Update OUR board > "b"
        bArray[coord.y * width + coord.x] = gSelectedPiece.piece;
        bArray[gSelectedPiece.y * width + gSelectedPiece.x] = ".";

        gTurn = gSelectedPiece.team === team2 ? team1 : team2;
        debug.innerHTML += "<p> Turn: " + gTurn.name + "</p>";
        debug.scrollTo(0, debug.scrollHeight);

        root.style.setProperty('--current-team-move', (gTurn === team2 ? team2.color : team1.color));

        turn.innerHTML = gTurn.name;
        gSelectedPiece = undefined;

    }

};

function deselectPiece() {
    const selectedPieceEl = board.childNodes[gSelectedPiece.y * (width + offset) + gSelectedPiece.x];
    selectedPieceEl.classList.remove("selected");
    gSelectedPiece = undefined;
}

function getElementPosition(el) {
    var rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { x: rect.left + scrollLeft, y: rect.top + scrollTop }
}


function boardClicked(event) {
    let target = event.target;

    if (target.parentNode.id === "board") {
        let idSplitted = event.target.id.split("-");
        let x = parseInt(idSplitted[0]);
        let y = parseInt(idSplitted[1]);
        move({ x, y });
        console.log({ x }, { y })
    }
    else {
        if (gSelectedPiece !== undefined) {
            deselectPiece();
        }
    }
}


(function main() {

    root.style.setProperty('--team1-color', team1.color);
    root.style.setProperty('--team2-color', team2.color);
    root.style.setProperty('--current-team-move', team1.color);
    turnUI.innerHTML = team1.name;

    for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {

            // Create the bArray out of (Soon be a String loaded from Database) b :)
            bArray.push(b.charAt(y * width + x));

            const piece = document.createElement("span");
            const currentCharInB = b.charAt((y * width) + x);

            if (currentCharInB === ".") {
                piece.classList.add("emptyCell");
            }

            piece.innerHTML = currentCharInB;

            piece.id = (x).toString() + "-" + (y).toString();

            if ((x + y) % 2 === 0) {
                piece.classList.add("shaded");
            }

            if (pieces.includes(currentCharInB)) {
                piece.classList.add("team2"); // Capitals are in Green Team
                console.log("Includes Capital")

            } else if (pieces.includes(currentCharInB.toUpperCase()) && currentCharInB == currentCharInB.toLowerCase()) {
                piece.classList.add("team1"); // Lowercase are in Pink Team
                console.log("Includes Lowercase")

            }

            //pepe.setAttribute("src", "https://lh3.googleusercontent.com/zIwOefjq_jqtRviHSO1snaIg0x4r8kH7Hy7dNIho4yZUU7LAQaF-7a1jow2_aNaq5mnnZ7A77bLJc9mgfwjjlR7SDwY=w128-h128-e365-rj-sc0x00ffffff");

            board.appendChild(piece);
        }

        board.appendChild(document.createElement("br"));
    }
})();
