let fields = [];
let noWinner = true;

let gameOver = false;
let draw = false;

let playerStart = 'cross';
let currentShape = 'cross';

let circlePoints = 0;
let crossPoints = 0;

let AUDIO_CLICK = new Audio('audio/click.mp3');
let AUDIO_WINNER = new Audio('audio/winner.mp3');


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        AUDIO_CLICK.play();
        whichPlayerTurn();
        fields[id] = currentShape;
        updateField();
        checkForWin();
    }
}


function whichPlayerTurn() {
    if (currentShape == 'cross') {
        showPlayerOne();
    }

    else {
        showPlayerTwo();
    }
}


function showPlayerOne() {
    currentShape = 'circle';
    document.getElementById('player-2').classList.remove('player-inactive');
    document.getElementById('player-1').classList.add('player-inactive');
}


function showPlayerTwo() {
    currentShape = 'cross';
    document.getElementById('player-1').classList.remove('player-inactive');
    document.getElementById('player-2').classList.add('player-inactive');
}


function updateField() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function restart() {
    gameOver = false;
    removeSymbolsAndLines();
    document.getElementById('winner-container').classList.add('d-none');
    document.getElementById("draw-container").classList.add('d-none');
    fields = [];
    whichPlayerStart();
    noWinner = true;
}


function whichPlayerStart() {
    if (playerStart == 'cross') {
        playerStart = 'circle';
        showPlayerOne();
    }

    else {
        playerStart = 'cross';
        showPlayerTwo();
    }
}


function removeSymbolsAndLines() {
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = '';
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
}


function checkForWin() {
    checkForVerticalWin();
    if(noWinner == true) {
        checkForHorizontalWin();
    }
    if(noWinner == true) {
        checkForDiagonalWin();
    }
    if (noWinner == false) {
        showWinner();
    }
    if (checkForDraw()) {
        document.getElementById("draw-container").classList.remove('d-none');
    }
}


function checkForDraw() {
    return fields[0] && fields[1] && fields[2] && fields[3] && fields[4]
    && fields[5] && fields[6] && fields[7] && fields[8] && gameOver == false;
}


function checkForVerticalWin() {
    if (rowFirstLineVertical()) {
        winnerFirstLineVertical();
    }

    else if (rowSecondLineVertical()) {
        winnerSecondLineVertical();
    }

    else if (rowThirdLineVertical()) {
        winnerThirdLineVertical();
    }
}


function checkForHorizontalWin() {
    if (rowFirstLineHorizontal()) {
        winnerFirstLineHorizontal();
    }

    else if (rowSecondLineHorizontal()) {
        winnerSecondLineHorizontal();
    }

    else if (rowThirdLineHorizontal()) {
        winnerThirdLineHorizontal();
    }
}


function checkForDiagonalWin() {
    if (rowFirstLineDiagonal()) {
        winnerFirstLineDiagonal();
    }

    else if (rowSecondLineDiagonal()) {
        winnerSecondLineDiagonal();
    }
}


function showWinner() {
    AUDIO_WINNER.play();
    document.getElementById('circle-points').innerHTML = circlePoints;
    document.getElementById('cross-points').innerHTML = crossPoints;
    gameOver = true;
    setTimeout(function () {
        document.getElementById('winner-container').classList.remove('d-none');
    }, 1000);
}


function winnerCircleOrCross(fieldNumber) {
    if (fields[fieldNumber] == 'cross') {
        checkWinnerCross();
    }

    if (fields[fieldNumber] == 'circle') {
        checkWinnerCircle();
    }
}


function checkWinnerCross() {
    document.getElementById('winner-image').src = "./img/cross.png";
    crossPoints++;
}


function checkWinnerCircle() {
    document.getElementById('winner-image').src = "./img/circle.png";
    circlePoints++;
}


function rowFirstLineVertical() {
    return fields[0] == fields[1] && fields[1] == fields[2] && fields[0];
}


function winnerFirstLineVertical() {
    winnerCircleOrCross(0);
    document.getElementById('line-1').style.transform = 'scaleX(1)';
    noWinner = false;
}


function rowSecondLineVertical() {
    return fields[3] == fields[4] && fields[4] == fields[5] && fields[3];
}


function winnerSecondLineVertical() {
    winnerCircleOrCross(3);
    document.getElementById('line-2').style.transform = 'scaleX(1)';
    noWinner = false;
}


function rowThirdLineVertical() {
    return fields[6] == fields[7] && fields[7] == fields[8] && fields[6];
}


function winnerThirdLineVertical() {
    winnerCircleOrCross(6);
    document.getElementById('line-3').style.transform = 'scaleX(1)';
    noWinner = false;
}


function rowFirstLineHorizontal() {
    return fields[0] == fields[3] && fields[3] == fields[6] && fields[0];
}


function winnerFirstLineHorizontal() {
    winnerCircleOrCross(0);
    document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    noWinner = false;
}


function rowSecondLineHorizontal() {
    return fields[1] == fields[4] && fields[4] == fields[7] && fields[1];
}


function winnerSecondLineHorizontal() {
    winnerCircleOrCross(1);
    document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    noWinner = false;
}


function rowThirdLineHorizontal() {
    return fields[2] == fields[5] && fields[5] == fields[8] && fields[2];
}


function winnerThirdLineHorizontal() {
    winnerCircleOrCross(2);
    document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    noWinner = false;
}


function rowFirstLineDiagonal() {
    return fields[0] == fields[4] && fields[4] == fields[8] && fields[0];
}


function winnerFirstLineDiagonal() {
    winnerCircleOrCross(0);
    document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    noWinner = false;
}


function rowSecondLineDiagonal() {
    return fields[2] == fields[4] && fields[4] == fields[6] && fields[2];
}


function winnerSecondLineDiagonal() {
    winnerCircleOrCross(2);
    document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    noWinner = false;
}



