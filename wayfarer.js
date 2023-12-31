//Cursor change//

function changeCursorOnClick() {
    document.body.style.cursor = `url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/36558a5333a7d172fc0d1b52e1aaca0693fce0a0/1%20Cursor/cursor_clicked.svg'), auto`;
  
    setTimeout(function() {
        document.body.style.cursor = originalCursorStyle;
    }, 200);
  }
  
  window.addEventListener('click', changeCursorOnClick);
  
  const originalCursorStyle = "url('https://raw.githubusercontent.com/em-egan/GA-Final_Project/9d4ac453066aac16f6e582cc2341fc67bf440f28/1%20Cursor/cursor_normal.svg'), auto";
  
  
  
  // aside menu selection//
  
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
  
  
  // background hover//
  
  backgroundSelection.addEventListener('mouseover', function handleMouseOver() {
  backgroundHidden.style.visibility = 'visible';
  });
  
  backgroundSelection.addEventListener('mouseout', function handleMouseOut() {
  backgroundHidden.style.visibility = 'hidden';
  });
  
  
  //empathize hover//
  
  empathizeSelection.addEventListener('mouseover', function handleMouseOver() {
  empathizeHidden.style.visibility = 'visible';
  });
  
  empathizeSelection.addEventListener('mouseout', function handleMouseOut() {
  empathizeHidden.style.visibility = 'hidden';
  });
  
  
  //define hover//
  
  defineSelection.addEventListener('mouseover', function handleMouseOver() {
  defineHidden.style.visibility = 'visible';
  });
  
  defineSelection.addEventListener('mouseout', function handleMouseOut() {
  defineHidden.style.visibility = 'hidden';
  });
  
  
  //ideate hover//
  
  ideateSelection.addEventListener('mouseover', function handleMouseOver() {
  ideateHidden.style.visibility = 'visible';
  });
  
  ideateSelection.addEventListener('mouseout', function handleMouseOut() {
  ideateHidden.style.visibility = 'hidden';
  });
  
  
  //prototype hover//
  
  prototypeSelection.addEventListener('mouseover', function handleMouseOver() {
  prototypeHidden.style.visibility = 'visible';
  });
  
  prototypeSelection.addEventListener('mouseout', function handleMouseOut() {
  prototypeHidden.style.visibility = 'hidden';
  });
  
  //test hover//
  
  testSelection.addEventListener('mouseover', function handleMouseOver() {
  testHidden.style.visibility = 'visible';
  });
  
  testSelection.addEventListener('mouseout', function handleMouseOut() {
  testHidden.style.visibility = 'hidden';
  });
  
  //Hamburger menu//
  
  document.querySelector('.hamburger-img').addEventListener('click', function(){
    document.getElementById('menu').classList.add('toggle-open');
  })
  document.getElementById('menu-close').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('toggle-open');
  })
  
  document.getElementById('one').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('toggle-open');
  })
  
  
  