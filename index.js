//cursor click//

function changeCursorOnClick() {
    document.body.style.cursor = `url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/36558a5333a7d172fc0d1b52e1aaca0693fce0a0/1%20Cursor/cursor_clicked.svg'), auto`;

    setTimeout(function() {
        document.body.style.cursor = originalCursorStyle;
    }, 200);
}
 
window.addEventListener('click', changeCursorOnClick);


//Hamburger menu//

document.querySelector('.hamburger-img').addEventListener('click', function(){
    document.getElementById('menu').classList.add('toggle-open');
})

document.getElementById('menu-close').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('toggle-open');
})


//UX Link image change//

const uxImage = document.querySelector('.UX-Design');
const originalSrcUx = uxImage.src;
const originalCursorStyle = "url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/9d4ac453066aac16f6e582cc2341fc67bf440f28/1%20Cursor/cursor_normal.svg'), auto";

const newImageUx = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59dd556263d8966173a5c82028dba3c4e8f13f62/3%20UI%20Elements/buttons/Ux%20Designer%20link/ux-designer-hover.svg"


function changeImageOnHoverUx() {
    uxImage.src = newImageUx;
}

function revertImageOnMouseOutUx() {
    uxImage.src = originalSrcUx;
}

uxImage.addEventListener('mouseover', changeImageOnHoverUx);
uxImage.addEventListener('mouseout', revertImageOnMouseOutUx);


