/**
 * So our board is 10 by 10, this is determined by the **width** const
 * */

const b = `.E..........O...ggggg......O.......P......mmmm....`;

const pieces = [ "P", "M", "O", "G", "E" ]; 

let bArray = []; // The Array version of b.... im expecting to store our board as a string in the database 


const width = 10;
const offset = 1; // This is because there is a <br> that we create for the UI board

let gSelectedPiece = undefined;
let gTurn = "pinkTeam";

// UI DOM Elements
let board  = document.getElementById("board");
let boardContainer  = document.getElementById("board-container");
let debug  = document.getElementById("debugger");
let turnUI = document.getElementById("turn");


board.addEventListener("click", boardClicked );


/**
 * params
 *      coord {Object} expected Structure - { x: 2, y: 8 }
 * */
const move = function( coord ) {

    console.log( "Start", gSelectedPiece );

    if ( gSelectedPiece  === undefined ) {        // Meaning has the user already selected a piece?

        console.log("Character Clicked: ", b.charAt( coord.y * width + coord.x) );

        if ( bArray[ coord.y * width + coord.x ] !== '.'  ) {

            const currentlyClickedPiece = board.childNodes[ coord.y * (width+offset) + coord.x ];
            if ( (currentlyClickedPiece.classList.contains("greenTeam") ? "greenTeam" : "pinkTeam")  !== gTurn ) {
                return; 
            }

            gSelectedPiece = { 
                piece: bArray[ coord.y * width + coord.x ],
                x: coord.x,
                y: coord.y,
                team: currentlyClickedPiece.classList.contains("greenTeam") ? "greenTeam" : "pinkTeam"
            };
            
            currentlyClickedPiece.classList.add("selected");

            debug.innerHTML += "<pre> Selected Piece: " + JSON.stringify(gSelectedPiece, null, 4) + "</pre>";
            
        }    

    } else {

        // Make sure the user cant move on itself.... :(   | unless we want to add the ability for a character to consumer its teammate for power? "THONK!?"
        if ( coord.x === gSelectedPiece.x && coord.y === gSelectedPiece.y ) {
            return;
        }
        
        // Update the Dom Board
        const clickedPieceEl        = board.childNodes[ coord.y * (width+offset) + coord.x ];
        const selectedPieceEl       = board.childNodes[ gSelectedPiece.y * (width+offset) + gSelectedPiece.x ];

        clickedPieceEl.innerHTML    = gSelectedPiece.piece;
        clickedPieceEl.classList = "";
        clickedPieceEl.classList.add( gSelectedPiece.team );

        selectedPieceEl.innerHTML   = ".";
        selectedPieceEl.classList.remove("selected");
        selectedPieceEl.classList.remove( gSelectedPiece.team );
                

        // Update OUR board > "b"
        bArray[ coord.y * width + coord.x ] = gSelectedPiece.piece;
        bArray[ gSelectedPiece.y * width + gSelectedPiece.x ] = ".";

        gTurn = gSelectedPiece.team === "greenTeam" ? "pinkTeam" : "greenTeam";
        debug.innerHTML += "<p> Turn: " + gTurn + "</p>";
        debug.scrollTo(0,debug.scrollHeight);

        boardContainer.style.border = "5px solid " + (gTurn === "greenTeam" ? "green" : "pink");

        turn.innerHTML = gTurn;
        gSelectedPiece = undefined;

        
    }

};


function boardClicked(event) {

    let idSplitted = event.target.id.split("-");
    let x = parseInt(idSplitted[0]);
    let y = parseInt(idSplitted[1]);
    console.log({x}, {y})

    move( {x, y} );

}


(function main() {

    
    for (let y = 0; y < 5; y += 1) {
        for (let x = 0; x < width; x += 1) {

            // Create the bArray out of (Soon be a String loaded from Database) b :)
            bArray.push( b.charAt(y * width + x) );

            const piece = document.createElement("span");
            const currentCharInB = b.charAt( (y * width) + x );
            piece.innerHTML = currentCharInB; 

            piece.id = ( x ).toString() + "-" + ( y ).toString();

            if((x+y) % 2 === 0){
                piece.classList.add("shaded");
            }

            if ( pieces.includes(currentCharInB) ) {
                piece.classList.add("greenTeam"); // Capitals are in Green Team
                console.log( "Includes Capital" )

            } else if ( pieces.includes( currentCharInB.toUpperCase() )  && currentCharInB == currentCharInB.toLowerCase() ) {
                piece.classList.add("pinkTeam"); // Lowercase are in Pink Team
                console.log( "Includes Lowercase" )

            }

            //pepe.setAttribute("src", "https://lh3.googleusercontent.com/zIwOefjq_jqtRviHSO1snaIg0x4r8kH7Hy7dNIho4yZUU7LAQaF-7a1jow2_aNaq5mnnZ7A77bLJc9mgfwjjlR7SDwY=w128-h128-e365-rj-sc0x00ffffff");

            board.appendChild( piece );
        } 

        board.appendChild( document.createElement( "br" ) );
    }
})();