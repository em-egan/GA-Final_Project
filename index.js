//cursor click

function changeCursorOnClick() {
    document.body.style.cursor = `url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/36558a5333a7d172fc0d1b52e1aaca0693fce0a0/1%20Cursor/cursor_clicked.svg'), auto`;

    setTimeout(function() {
        document.body.style.cursor = originalCursorStyle;
    }, 200);
}
 
window.addEventListener('click', changeCursorOnClick);


//UX Link image change

const uxImage = document.querySelector('.UX-Design');
const originalSrcUx = uxImage.src;
const originalCursorStyle = "url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/9d4ac453066aac16f6e582cc2341fc67bf440f28/1%20Cursor/cursor_normal.svg'), auto";

const newImageUx = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59577852c6b4f1faad77bc262253312aa1819d4f/UX_link_hover.svg"


function changeImageOnHoverUx() {
    uxImage.src = newImageUx;
}

function revertImageOnMouseOutUx() {
    uxImage.src = originalSrcUx;
}

uxImage.addEventListener('mouseover', changeImageOnHoverUx);
uxImage.addEventListener('mouseout', revertImageOnMouseOutUx);


