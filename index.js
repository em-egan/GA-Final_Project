const uxImage = document.querySelector('.UX-Design');
const mvImage = document.querySelector('.museums-victoria');
// const cursorCustom = document.body.style.cursor;

const originalSrcUx = uxImage.src;
const originalSrcMv = mvImage.src;
// const originalCursorStyle = cursorCustom.cursor;

const newImageUx = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/59577852c6b4f1faad77bc262253312aa1819d4f/UX_link_hover.svg"
const newImageSrcMv = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/d9df88206bac8ee9a9fe36f61f45b48e614311e6/2%20Project%20images/MV-mock-up-hover.svg"
// const newImageCursor = "https://raw.githubusercontent.com/em-egan/GA-Final_Project/411dbde88354ea071d3dd3fdeb09cc799f77c316/cursor_hand_click.svg"


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


// function changeCursorOnClick() {
//     document.body.style.cursor = `url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/411dbde88354ea071d3dd3fdeb09cc799f77c316/cursor_hand_click.svg'), auto`;

//     setTimeout(function() {
//         document.body.style.cursor = originalCursorStyle;
//     }, 1000);
// }
 
// cursorCustom.addEventListener('click', changeCursorOnClick);

document.querySelector('.hamburger-img').addEventListener('click', function(){
    document.getElementById('menu').classList.add('toggle-open');
  })
  document.getElementById('menu-close').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('toggle-open');
  })
