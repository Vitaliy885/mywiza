var mySiema = new Siema({
 selector: '.our__reviews-list',
 duration: 2000,
 perPage: 3,
 loop: true,
 perPage: {
    768: 2,
    1024: 3,
  },
});

var prev = document.querySelector('.left__arrow');
var next = document.querySelector('.right__arrow');

prev.addEventListener('click', () => mySiema.prev());
next.addEventListener('click', () => mySiema.next());