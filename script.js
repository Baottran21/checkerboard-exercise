//add color ways to each box by the styles in the html
//Create a box
//Create a table
    //use a function that will change the name of the rows and columns of such
    //test functionality by adding an 8x8 table
//Create rows and columns
//Put the boxes in the table

const checkerBoard = document.createElement("div")
document.body.appendChild(checkerBoard)
checkerBoard.id = "checkerBoardContainer"
checkerBoard.style.display = "flex";
checkerBoard.style.flexWrap = "wrap";
checkerBoard.style.width = "800px";
checkerBoard.style.height = "800px";


function makeSquare(str) {
    const square = document.createElement("div")
    square.classList.add("square");
    checkerBoard.appendChild(square);
    square.style.width = "12.5%";
    square.style.height = "12.5%"
    square.style.backgroundColor = str
}

///////////////////TRADITIONAL BOARD///////////////////////////////
//Changing between black and red tiles
function makeTradionalBoard () {
        for (let i = 0; i < 8; i++) {
//Starting on an even row until the first loop is done
        if (i % 2 === 0) {
            for (let j = 0; j < 8; j++) {
                if (j % 2 === 0) {
                    makeSquare("red");
                } else {
                    makeSquare("black")
                }
            }
//This is for when i is odd
    } else {
            for (let k = 0; k < 8; k++) {
                if (k % 2 === 0) {
                    makeSquare("black")
                } else {
                    makeSquare("red")
                }   
            }
        }
    }
}
// makeTradionalBoard()


////////////////////RANDOM BOARD/////////////////////////////////
function randomBoard() {
    for (let i = 0; i < 8; i++) {
        //Starting on an even row until the first loop is done
        if (i % 2 === 0) {
            for (let j = 0; j < 8; j++) {
                let random = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
                if (j % 2 === 0) {
                    makeSquare(`${random}`);
                } else {
                    makeSquare(`${random}`)
                }
            }
        //This is for when i is odd
        } else {
            for (let k = 0; k < 8; k++) {
                let random = '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
                if (k % 2 === 0) {
                    makeSquare(`${random}`)
                } else {
                    makeSquare(`${random}`)
                }   
            }
        }
    }
}

// randomBoard()

//////////////////GRADIENT BOARD////////////////////////////////////

function gradientBoard() {
    for (let i = 0; i < 8; i++) {
        if (i % 2 === 0) {
            for (let j = 0; j < 8; j++) {
                if (j % 2 === 0) {
                    makeSquare("black")
                } else {
                    makeSquare("red")
                }
            }
    } else {
        for (let j = 0; j < 8; j++) {
            if (j % 2 === 0) {
                makeSquare("red")
            } else {
                makeSquare("black")
            }
        }
    }
}}


gradientBoard()