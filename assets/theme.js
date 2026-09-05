document.addEventListener('DOMContentLoaded', function(){
  var toggle = document.querySelector('.mobile-menu-toggle');
  var header = document.querySelector('header');
  if(!toggle || !header) return;
  toggle.addEventListener('click', function(e){
    var expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    header.classList.toggle('nav-open');
  });

  // close menu when clicking outside
  document.addEventListener('click', function(e){
    if(!header.classList.contains('nav-open')) return;
    if(e.target.closest('.nav')) return; // click inside nav
    header.classList.remove('nav-open');
    if(toggle) toggle.setAttribute('aria-expanded','false');
  });
});
