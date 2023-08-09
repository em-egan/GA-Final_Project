document.querySelector('.hamburger-img').addEventListener('click', function(){
  document.getElementById('menu').classList.add('toggle-open');
})
document.getElementById('menu-close').addEventListener('click', function(){
  document.getElementById('menu').classList.remove('toggle-open');
})


// aside menu selection

const backgroundSelection = document.querySelector('.background-aside');
const empathizeSelection = document.querySelector('.empathize-aside');
const defineSelection = document.querySelector('.define-aside');
const ideateSelection = document.querySelector('.ideate-aside');
const prototypeSelection = document.querySelector('.prototype-aside');
const testSelection = document.querySelector('.test-aside');



const backgroundHidden = document.querySelector('#interactive-background');
const empathizeHidden = document.querySelector('#interactive-empathize');
const defineHidden = document.querySelector('#interactive-define');
const ideateHidden = document.querySelector('#interactive-ideate');
const prototypeHidden = document.querySelector('#interactive-prototype');
const testHidden = document.querySelector('#interactive-test');


// background hover
backgroundSelection.addEventListener('mouseover', function handleMouseOver() {
backgroundHidden.style.visibility = 'visible';
});

backgroundSelection.addEventListener('mouseout', function handleMouseOut() {
backgroundHidden.style.visibility = 'hidden';
});


//empathize hover

empathizeSelection.addEventListener('mouseover', function handleMouseOver() {
empathizeHidden.style.visibility = 'visible';
});

empathizeSelection.addEventListener('mouseout', function handleMouseOut() {
empathizeHidden.style.visibility = 'hidden';
});


//define hover

defineSelection.addEventListener('mouseover', function handleMouseOver() {
defineHidden.style.visibility = 'visible';
});

defineSelection.addEventListener('mouseout', function handleMouseOut() {
defineHidden.style.visibility = 'hidden';
});


//ideate hover

ideateSelection.addEventListener('mouseover', function handleMouseOver() {
ideateHidden.style.visibility = 'visible';
});

ideateSelection.addEventListener('mouseout', function handleMouseOut() {
ideateHidden.style.visibility = 'hidden';
});


//prototype hover

prototypeSelection.addEventListener('mouseover', function handleMouseOver() {
prototypeHidden.style.visibility = 'visible';
});

prototypeSelection.addEventListener('mouseout', function handleMouseOut() {
prototypeHidden.style.visibility = 'hidden';
});

//test hover

testSelection.addEventListener('mouseover', function handleMouseOver() {
testHidden.style.visibility = 'visible';
});

testSelection.addEventListener('mouseout', function handleMouseOut() {
testHidden.style.visibility = 'hidden';
});
