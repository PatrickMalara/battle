/**
 * So our board is 8 by 8, this is determined by the **width** and **height** consts
 * */

//stringified version of board. will be received from DB in the future
let b = undefined;


if (window.localStorage.getItem('boardState') !== null) {
    b = window.localStorage.getItem('boardState');
}
else {
    b = `{"board":[{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":0,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":1,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":2,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":3,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":4,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":5,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":6,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":7,"y":0},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":0,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":1,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":2,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":3,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":4,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":5,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":6,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":7,"y":1},"team":{"name":"Team 1","class":"team1","color":"red"},"forwardDirection":1,"healthBar":{"container":{},"bar":{},"maxVal":2}},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":0,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":1,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":2,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":3,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":4,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":5,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":6,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"rogue","maxHealth":2,"health":2,"move":3,"moveDirecions":{"forward":true,"back":false,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.25,"attack":1,"range":1,"display":"<i class='fas fa-chess-pawn'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":7,"y":6},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":2}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":0,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":1,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":2,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":3,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":4,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":4}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":5,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"archer","maxHealth":3,"health":3,"move":2,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":false,"freeWalk":false},"swiftness":0.5,"attack":2,"range":3,"display":"<i class='fas fa-chess-bishop'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":6,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":3}},{"type":"tank","maxHealth":4,"health":4,"move":1,"moveDirecions":{"forward":true,"back":true,"horizontal":true,"vertical":true,"diagonal":true,"freeWalk":false},"swiftness":1,"attack":3,"range":1,"display":"<i class='fas fa-chess-rook'></i><span class='healthContainer hidden'><span class='healthBar' style='width: 100%;'></span></span>","coord":{"x":7,"y":7},"team":{"name":"Team 2","class":"team2","color":"blue"},"forwardDirection":-1,"healthBar":{"container":{},"bar":{},"maxVal":4}}],"turn":{"name":"Team 1","class":"team1","color":"red"}}`;
}
let bArray = []; // The Array version of b.... im expecting to store our board as a string in the database 


const width = 8;
const height = 8;
const offset = 1; // This is because there is a <br> that we create for the UI board


const team1 = {
    name: "Team 1",
    class: "team1",
    color: "red"
}

const team2 = {
    name: "Team 2",
    class: "team2",
    color: "blue"
}


class HealthBar {
    /*constructor(piece, maxVal, value) {
        this.container = document.createElement("span");
        this.container.classList = "healthContainer hidden";

        this.bar = document.createElement("span");
        this.bar.classList = "healthBar";
        this.bar.style.width = (value / maxVal * 100) + "%";

        this.container.appendChild(this.bar);
        piece.appendChild(this.container);

        this.maxVal = maxVal;
    }*/

    constructor(obj) {
        obj && Object.assign(this, obj);
        this.maxVal = obj.maxVal;
    }

    setBar(c) {
        this.container = c;
        this.bar = c.childNodes[0];
    }

    update(value) {
        this.container.classList.remove("hidden");
        this.bar.style.width = (value / this.maxVal * 100) + "%";
    }
}

class Animator {
    constructor(startPos, animTime, content, team) {
        this.animEl = document.createElement("span");
        this.animEl.classList = "hidden animator " + team.class;
        this.animEl.innerHTML = content;
        this.animEl.style = "top: " + startPos.y + "px; left: " + startPos.x + "px; transition: top " + animTime + "s, left " + animTime + "s";

        document.body.appendChild(this.animEl);
    }

    animate(goToPos) {
        this.animEl.classList.remove("hidden");
        this.animEl.style.top = goToPos.y + "px";
        this.animEl.style.left = goToPos.x + "px";
    }

    delete() {
        this.animEl.remove();
    }
}


/* PIECE CHARACTER CLASSES */

class Piece {
    /*constructor(type) {
        this.type = type.typeName;
        this.maxHealth = type.maxHealth;
        this.health = type.health;
        this.move = type.move;
        this.moveDirecions = type.moveDirecions;
        this.swiftness = type.swiftness;
        this.attack = type.attack;
        this.range = type.range;
    }*/
    constructor(obj) {
        obj && Object.assign(this, obj);

        this.display = obj.display;

        this.maxHealth = obj.maxHealth;
        this.health = obj.health;
        this.move = obj.move;
        this.moveDirecions = obj.moveDirecions;
        this.swiftness = obj.swiftness;
        this.attack = obj.attack;
        this.range = obj.range;
        this.team = obj.team;
        this.healthBar = obj.healthBar

        this.initHealthBar(obj.healthBar);
    }

    updateTypeRules(type) {
        this.move = type.move;
        this.moveDirecions = type.moveDirecions;
        this.swiftness = type.swiftness;
        this.maxHealth = type.maxHealth;
        this.health = type.health;
        this.attack = type.attack;
        this.range = type.range;
    }

    initHealthBar(hb) {
        this.healthBar = new HealthBar(hb);
    }

    setHealthBar(el) {
        this.healthBar.setBar(el);
    }

    updateUI(ui) {
        this.display = ui.replace(/"/g, '\'');
    }

    setTeam(team) {
        this.team = team;
        this.forwardDirection = team.class === 'team1' ? 1 : -1;
    }

    setCoord(coord) {
        this.coord = coord;
    }

    defend(damage) {
        this.health -= damage;
        this.healthBar.update(this.health);
    }
}

const rogue = {
    typeName: "rogue",
    move: 3,
    moveDirecions: { forward: true, back: false, horizontal: true, vertical: true, diagonal: false, freeWalk: false },
    swiftness: 0.25,
    maxHealth: 2,
    health: 2,
    attack: 1,
    range: 1
}

const tank = {
    typeName: "tank",
    move: 1,
    moveDirecions: { forward: true, back: true, horizontal: true, vertical: true, diagonal: true, freeWalk: false },
    swiftness: 1,
    maxHealth: 4,
    health: 4,
    attack: 3,
    range: 1
}

const archer = {
    typeName: "archer",
    move: 5,
    moveDirecions: { forward: true, back: true, horizontal: true, vertical: true, diagonal: true, freeWalk: false },
    swiftness: 0.5,
    maxHealth: 3,
    health: 3,
    attack: 2,
    range: 3
}

let pieces = [];
let gSelectedPiece = undefined;
let gTurn = team1;
let legalMoves = [];

// UI DOM Elements
let root = document.querySelector(":root");
let board = document.getElementById("board");
let boardContainer = document.getElementById("board-container");
let debug = document.getElementById("debugger");
let turnUI = document.getElementById("turn");

window.addEventListener("click", boardClicked);

/**
 * params
 *      coord {Object} expected Structure - { x: 2, y: 8 }
 * */
const move = function (coord) {

    if (gSelectedPiece === undefined) {        // Meaning has the user already selected a piece?

        let selectedPiece = getPieceAt(coord);
        let clickedCell = board.childNodes[(coord.y * (width + offset) + coord.x)];
        if (selectedPiece === undefined) {
            return;
        }

        if (selectedPiece.team.class !== gTurn.class) {
            return;
        }

        gSelectedPiece = {
            piece: selectedPiece,
            content: clickedCell.innerHTML,
            x: coord.x,
            y: coord.y,
            team: selectedPiece.team
        };

        clickedCell.classList.add("selected");

        getLegalMoves(selectedPiece);

        debug.innerHTML += "<pre> Selected Piece: " + JSON.stringify(gSelectedPiece, null, 4) + "</pre>";

    } else {

        let clickedPiece = getPieceAt(coord);
        let clickedCell = board.childNodes[(coord.y * (width + offset) + coord.x)];

        // Update the Dom Board
        const clickedPieceEl = board.childNodes[coord.y * (width + offset) + coord.x];
        const selectedPieceEl = board.childNodes[gSelectedPiece.y * (width + offset) + gSelectedPiece.x];

        // Make sure the user cant move on itself.... :(   | unless we want to add the ability for a character to consumer its teammate for power? "THONK!?"
        if (clickedPiece !== undefined && ((coord.x === gSelectedPiece.x && coord.y === gSelectedPiece.y) || clickedPiece.team.class === gSelectedPiece.team.class)) {
            deselectPiece();
            return;
        }

        if (clickedPieceEl.classList.contains("legal-move") !== true) {
            return;
        }

        let animator = new Animator(getElementPosition(selectedPieceEl), gSelectedPiece.piece.swiftness, gSelectedPiece.content, gSelectedPiece.team)

        const goToPos = getElementPosition(clickedPieceEl);
        animator.animate(goToPos);

        //clear the cell that was selected
        selectedPieceEl.innerHTML = ".";
        selectedPieceEl.classList.add("emptyCell");
        selectedPieceEl.classList.remove("selected");
        selectedPieceEl.classList.remove(gSelectedPiece.team.class);

        const piece = gSelectedPiece;//for use within the timeout function

        let animationDuration = piece.piece.swiftness;

        //after the animation is done, hide the animator, and populate the cell with the right piece and color
        setTimeout(function () {

            if (clickedPiece !== undefined) {// attacking a piece
                if (attack(piece.piece, clickedPiece) === 'died') { //we killed (take over the cell)
                    removePieceAt(coord);
                    piece.piece.setCoord(coord);

                    clickedPieceEl.innerHTML = piece.content;
                    clickedPieceEl.classList.remove("team1");
                    clickedPieceEl.classList.remove("team2");
                    clickedPieceEl.classList.remove("emptyCell");
                    clickedPieceEl.classList.add(piece.team.class);

                    piece.piece.setHealthBar(clickedPieceEl.childNodes[1], clickedPiece.healthBar);

                    animator.delete();

                    finishTurn();
                }
                else { // we didnt kill (go back to original cell)
                    const goFromPos = getElementPosition(selectedPieceEl);
                    animator.animate(goFromPos);

                    setTimeout(function () {
                        selectedPieceEl.innerHTML = piece.content;
                        selectedPieceEl.classList.remove("emptyCell");
                        selectedPieceEl.classList.add(piece.team.class);

                        piece.piece.setHealthBar(selectedPieceEl.childNodes[1], piece.piece.healthBar);
                        clickedPiece.updateUI(clickedPieceEl.innerHTML);

                        animator.delete();

                        finishTurn();
                    }, animationDuration * 1000);
                }
            } else {//moving to empty space
                piece.piece.setCoord(coord);

                clickedPieceEl.innerHTML = piece.content;
                clickedPieceEl.classList.remove("team1");
                clickedPieceEl.classList.remove("team2");
                clickedPieceEl.classList.remove("emptyCell");
                clickedPieceEl.classList.add(piece.team.class);

                piece.piece.setHealthBar(clickedPieceEl.childNodes[1]);

                piece.piece.updateUI(clickedPieceEl.innerHTML);

                animator.delete();
                finishTurn();
            }

        }, animationDuration * 1000);

        clearLegalMoves();

        function finishTurn() {
            bArray[coord.y * width + coord.x] = getPieceAt(coord);
            bArray[gSelectedPiece.y * width + gSelectedPiece.x] = getPieceAt({ x: gSelectedPiece.x, y: gSelectedPiece.y });

            gTurn = gSelectedPiece.team.class === 'team2' ? team1 : team2;
            debug.innerHTML += "<p> Turn: " + gTurn.name + "</p>";
            debug.scrollTo(0, debug.scrollHeight);

            root.style.setProperty('--current-team-move', (gTurn === team2 ? team2.color : team1.color));

            turn.innerHTML = gTurn.name;
            gSelectedPiece = undefined;


            saveGame();
            //console.log(bArray);
        }
    }
};

function saveGame() {
    window.localStorage.setItem('boardState', JSON.stringify({ board: bArray, turn: gTurn }));
}

function attack(attacker, defender) {

    defender.defend(attacker.attack);

    if (defender.health <= 0) {
        return "died";
    }

    return "survived";
}

function stateIfAttacked(attacker, defender) {
    if (defender.health - attacker.attack <= 0) {
        return "dead";
    }
    return "alive";
}

function removePieceAt(coord) {
    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].coord.x === coord.x && pieces[i].coord.y === coord.y) {
            pieces.splice(i, 1);
            return;
        }
    }
}

function getPieceAt(coord) {
    if (coord.x >= width || coord.y >= height || coord.x < 0 || coord.y < 0) {
        return -1;
    }

    for (let i = 0; i < pieces.length; i++) {
        if (pieces[i].coord.x === coord.x && pieces[i].coord.y === coord.y) {
            return pieces[i];
        }
    }
    return undefined;
}

function clearLegalMoves() {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            board.childNodes[y * (width + offset) + x].classList.remove("legal-move");
            board.childNodes[y * (width + offset) + x].classList.remove("legal-move-attack");
            board.childNodes[y * (width + offset) + x].classList.remove("legal-move-kill");
        }
    }
}

function getLegalMoves(piece) {
    clearLegalMoves();
    checkLegalMove(piece, piece.coord, piece.move, true);
}

function checkLegalMove(piece, coord, step, first = false) {

    let cell = board.childNodes[coord.y * (width + offset) + coord.x];
    let pieceAtCoord = getPieceAt(coord);
    let directions = piece.moveDirecions;

    if (cell === undefined || pieceAtCoord === -1/* || cell.classList.contains("legal-move") === true*/) {
        return;
    }
    if (first === true || (step > 0 && (pieceAtCoord === undefined || pieceAtCoord.team.class !== piece.team.class))) {
        try {
            if (first !== true) {

                cell.classList.add("legal-move");
                if (pieceAtCoord !== undefined) {
                    if (stateIfAttacked(piece, pieceAtCoord) === "dead") {
                        cell.classList.add("legal-move-kill");
                    }
                    else {
                        cell.classList.add("legal-move-attack");
                    }
                }

            }
            else {
                step++;
            }
        } catch (Exception) { }
        if (pieceAtCoord === undefined || first === true) {
            if (directions.freeWalk !== true) {
                //only allow a move if its on the same x/y/diagonal plane as oriignal piece 
            }

            if (directions.forward === true && directions.vertical === true) {
                checkLegalMove(piece, { x: coord.x, y: coord.y + (1 * piece.forwardDirection) }, step - 1);
            }

            if (directions.diagonal === true & directions.forward === true) {
                checkLegalMove(piece, { x: coord.x - 1, y: coord.y + (1 * piece.forwardDirection) }, step - 1);
                checkLegalMove(piece, { x: coord.x + 1, y: coord.y + (1 * piece.forwardDirection) }, step - 1);
            }

            if (directions.back === true && directions.vertical === true) {
                checkLegalMove(piece, { x: coord.x, y: coord.y - (1 * piece.forwardDirection) }, step - 1);
            }

            if (directions.diagonal === true && directions.back === true) {
                checkLegalMove(piece, { x: coord.x - 1, y: coord.y - (1 * piece.forwardDirection) }, step - 1);
                checkLegalMove(piece, { x: coord.x + 1, y: coord.y - (1 * piece.forwardDirection) }, step - 1);
            }

            if (directions.horizontal === true) {
                checkLegalMove(piece, { x: coord.x + 1, y: coord.y }, step - 1);
                checkLegalMove(piece, { x: coord.x - 1, y: coord.y }, step - 1);
            }
        }

    } else {
        return;
    }
}

function deselectPiece() {
    clearLegalMoves();
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
    }
    else {
        if (gSelectedPiece !== undefined) {
            deselectPiece();
        }
    }
}


function setPlayerTurn(team) {
    root.style.setProperty('--current-team-move', team.color);
    turnUI.innerHTML = team.name;
    gTurn = team.class == 'team1' ? team1 : team2;
}


(function main() {

    root.style.setProperty('--team1-color', team1.color);
    root.style.setProperty('--team2-color', team2.color);

    // Create the bArray out of (Soon be a String loaded from Database) b :)
    let saveData = JSON.parse(b);

    bArray = saveData['board'];
    setPlayerTurn(saveData['turn']);

    //console.log(bArray)
    for (let y = 0; y < height; y += 1) {
        for (let x = 0; x < width; x += 1) {

            let p = undefined;
            const piece = document.createElement("span");
            const currentPiece = bArray[(y * width) + x];

            /*
            switch (currentPiece.toLowerCase()) {
                case "r":
                    piece.innerHTML = '<i class="fas fa-chess-pawn"></i>';
 
                    p = new Piece(rogue);
                    p.setCoord({ x, y });
                    p.setTeam(currentPiece === "R" ? team1 : team2);
                    pieces.push(p);
                    break;
 
                case "t":
                    piece.innerHTML = '<i class="fas fa-chess-rook"></i>';
 
                    p = new Piece(tank);
                    p.setCoord({ x, y });
                    p.setTeam(currentPiece === "T" ? team1 : team2);
                    pieces.push(p);
 
                    break;
 
                case "a":
                    piece.innerHTML = '<i class="fas fa-chess-bishop"></i>';
 
                    p = new Piece(archer);
                    p.setCoord({ x, y });
                    p.setTeam(currentPiece === "A" ? team1 : team2);
                    pieces.push(p);
 
                    break;
 
                case ".":
                    piece.classList.add("emptyCell");
                    piece.innerHTML = '.';
                    break;
            }
            */
            if (currentPiece === null) {
                piece.classList.add("emptyCell");
                piece.innerHTML = '.';
                bArray[(y * width) + x] = undefined;
            }
            else {
                p = new Piece(currentPiece);
                p.setCoord(p.coord);
                pieces.push(p);
                piece.innerHTML = p.display;
                p.setHealthBar(piece.childNodes[1]);
                piece.classList.add(p.team.class);
                bArray[(y * width) + x] = p;
                switch (p.type) {
                    case "rogue":
                        p.updateTypeRules(rogue);
                        break;
                    case "tank":
                        p.updateTypeRules(tank);
                        break;
                    case "archer":
                        p.updateTypeRules(archer);
                        break;
                }
            }



            piece.id = (x).toString() + "-" + (y).toString();

            if ((x + y) % 2 === 0) {
                piece.classList.add("shaded");
            }

            /*if (p !== undefined) {
                piece.classList.add(p.team.class);
                p.initHealthBar(new HealthBar(piece, p.maxHealth, p.health));
 
            }*/


            //pepe.setAttribute("src", "https://lh3.googleusercontent.com/zIwOefjq_jqtRviHSO1snaIg0x4r8kH7Hy7dNIho4yZUU7LAQaF-7a1jow2_aNaq5mnnZ7A77bLJc9mgfwjjlR7SDwY=w128-h128-e365-rj-sc0x00ffffff");

            board.appendChild(piece);
        }
        board.appendChild(document.createElement("br"));
    }
    //console.log((bArray));
})();
