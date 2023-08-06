document.querySelector('.hamburger-img').addEventListener('click', function(){
    document.getElementById('menu').classList.add('toggle-open');
  })
  document.getElementById('menu-close').addEventListener('click', function(){
    document.getElementById('menu').classList.remove('toggle-open');
  })