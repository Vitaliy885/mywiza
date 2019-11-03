(function() {

    var btnMenu = document.querySelector('.btn__menu');
    var menu = document.querySelector('.navbar');

    btnMenu.addEventListener('click', function() {
        menu.classList.toggle('active-bar');
        btnMenu.classList.toggle('active-burger');
    });
})();

(function() {

    window.onscroll = function() {
        if (window.pageYOffset > 80) {
            document.querySelector('.top__line-header').style.display = 'none';
            document.querySelector('.navbar__line').classList.add('scrollingHeader');
            document.querySelector('.scrollingBlockHidden').style.height = 150 + 'px';
        } else {
            document.querySelector('.top__line-header').style.display = 'block';
            document.querySelector('.navbar__line').classList.remove('scrollingHeader');
            document.querySelector('.scrollingBlockHidden').style.height = 0 + 'px';
        }

        if (window.pageYOffset > 800) {
            document.querySelector('.to-top').classList.add('active');
        } else {
            document.querySelector('.to-top').classList.remove('active');
        }

    }

    document.querySelector('.to-top').addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    document.querySelectorAll('.link__form').forEach(function(modalForm) {
        modalForm.addEventListener('click', function() {
            document.querySelector('.overlay').classList.add('active');
            document.querySelector('.modal').classList.add('active');
        });
    });
    document.querySelector('.overlay').addEventListener('click', function() {
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.modal').classList.remove('active');
        document.querySelector('.modal-success').classList.remove('active');
    });
    document.querySelector('.close-modal').addEventListener('click', function() {
        document.querySelector('.overlay').classList.remove('active');
        document.querySelector('.modal').classList.remove('active');
        document.querySelector('.modal-success').classList.remove('active');
    });
})();


$('.scrollTo').click(function() {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 68
    }, 500);
    return false;
});