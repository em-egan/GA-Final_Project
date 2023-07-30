const uxImage = document.querySelector('.UX-Design');
const mvImage = document.querySelector('.Museums-Victoria');
const animationSquare = document.querySelector('.square-animation');

const originalSrcUx = uxImage.src;
const originalSrcMv = mvImage.src;
const originalSrcSq = animationSquare.src;

const newImageUx = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59577852c6b4f1faad77bc262253312aa1819d4f/UX_link_hover.svg"
const newImageSrcMv = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59577852c6b4f1faad77bc262253312aa1819d4f/MV-hover%3Dyes.svg"

function changeImageOnHoverUx() {
    uxImage.src = newImageUx;
}

function revertImageOnMouseOutUx() {
    uxImage.src = originalSrcUx;
}

uxImage.addEventListener('mouseover', changeImageOnHoverUx);
uxImage.addEventListener('mouseout', revertImageOnMouseOutUx);


function changeImageOnHoverMv() {
    mvImage.src = newImageSrcMv;
}

function revertImageOnMouseOutMv() {
    mvImage.src = originalSrcMv;
}

mvImage.addEventListener('mouseover', changeImageOnHoverMv);
mvImage.addEventListener('mouseout', revertImageOnMouseOutMv);




