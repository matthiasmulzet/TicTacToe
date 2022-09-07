let fields = [];
let gameOver = false;
let draw = false;
let currentShape = 'cross';
let circlePoints = 0;
let crossPoints = 0;
let AUDIO_CLICK = new Audio('audio/click.mp3');
let AUDIO_WINNER = new Audio('audio/winner.mp3');


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        AUDIO_CLICK.play();
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-2').classList.remove('player-inactive');
            document.getElementById('player-1').classList.add('player-inactive');
        } 
        
        else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        }
        
        fields[id] = currentShape;
        console.log(fields);
        updateField();
        checkForWin();
    }
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

    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).style.transform = '';
    }

    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }

    document.getElementById('winner-container').classList.add('d-none');
    document.getElementById("draw-container").classList.add('d-none');
    fields = [];
    currentShape = "cross";
    document.getElementById('player-1').classList.remove('player-inactive');
    document.getElementById('player-2').classList.add('player-inactive');
}


function checkForWin() {
    let winner;

    // First Row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        if (fields[0] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[0] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }

        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }

    else if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        if (fields[3] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[3] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }

    else if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        if (fields[6] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[6] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }

    else if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        if (fields[0] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[0] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    else if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        if (fields[1] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[1] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-5').style.transform = 'rotate(90deg) scaleX(1)';
    }

    else if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        if (fields[2] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[2] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    else if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        if (fields[0] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[0] == 'circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-7').style.transform = 'rotate(45deg) scaleX(1)';
    }

    else if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        if (fields[2] == 'cross') {
            document.getElementById('winner-image').src = "./img/cross.png";
            crossPoints++;
        }

        if (fields[2] =='circle') {
            document.getElementById('winner-image').src = "./img/circle.png";
            circlePoints++;
        }
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scaleX(1)';
    }

    if (winner) {
        AUDIO_WINNER.play();
        document.getElementById('circle-points').innerHTML = circlePoints;
        document.getElementById('cross-points').innerHTML = crossPoints;
        gameOver = true;
        setTimeout(function () {
            document.getElementById('winner-container').classList.remove('d-none');
        }, 1000);
    }

    if (fields[0] && fields[1] && fields[2] && fields[3] && fields[4]
        && fields[5] && fields[6] && fields[7] && fields[8] && gameOver == false) {
            document.getElementById("draw-container").classList.remove('d-none');
        }

}

