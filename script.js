let numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8]

let showCross = false;
let showCircle = false;

function showCircleOrCross(circleId, crossId) {
    let circleIdNumber = circleId.slice(-1);
    let crossIdNumber = crossId.slice(-1);

    let actualCross = document.getElementById(`cross-${crossIdNumber}`);
    let actualCircle = document.getElementById(`circle-${circleIdNumber}`);
    let actualCrossIdTd = document.getElementById(`circle-or-cross-id-${crossIdNumber}`);
    let actualCircleIdTd = document.getElementById(`circle-or-cross-id-${circleIdNumber}`);
    if(showCross == false) {
        if (typeof actualCrossIdTd.onclick == "function") {
            actualCross.classList.remove('d-none');
            actualCrossIdTd.removeAttribute('onclick');
            actualCircleIdTd.removeAttribute('onclick');
            showCross = true;
        } 
    }

    else {
        if (typeof actualCircleIdTd.onclick == "function") {
            actualCircle.classList.remove('d-none');
            actualCrossIdTd.removeAttribute('onclick');
            actualCircleIdTd.removeAttribute('onclick');
            showCross = false;
        } 
    }
}