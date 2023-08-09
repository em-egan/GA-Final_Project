function changeCursorOnClick() {
    document.body.style.cursor = 'url('`https://raw.githubusercontent.com/em-egan/GA-Final_Project/36558a5333a7d172fc0d1b52e1aaca0693fce0a0/1%20Cursor/cursor_clicked.svg'), auto`;

    setTimeout(function() {
        document.body.style.cursor = originalCursorStyle;
    }, 1000);
}
 
window.addEventListener('click', changeCursorOnClick);


const uxImage = document.querySelector('.UX-Design');
const mvImage = document.querySelector('.museums-victoria');

const originalSrcUx = uxImage.src;
const originalSrcMv = mvImage.src;
const originalCursorStyle = "url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/9d4ac453066aac16f6e582cc2341fc67bf440f28/1%20Cursor/cursor_normal.svg'), auto";

const newImageUx = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59577852c6b4f1faad77bc262253312aa1819d4f/UX_link_hover.svg"
const newImageSrcMv = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/d9df88206bac8ee9a9fe36f61f45b48e614311e6/2%20Project%20images/MV-mock-up-hover.svg"
const newImageCursor = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/36558a5333a7d172fc0d1b52e1aaca0693fce0a0/1%20Cursor/cursor_clicked.svg"


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


