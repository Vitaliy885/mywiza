(function(){

	var btnMenu = document.querySelector('.btn__menu');
	var menu = document.querySelector('.navbar');

	btnMenu.addEventListener('click', function(){
		menu.classList.toggle('active-bar');
		btnMenu.classList.toggle('active-burger');
	});
})();


window.onscroll = function() {
	if(window.pageYOffset > 1){
document.querySelector('.top__line-header').style.display = 'none';
document.querySelector('.navbar__line').classList.add('scrollingHeader');
document.querySelector('.scrollingBlockHidden').style.height = 69.2 +'px';
	}else{
		document.querySelector('.top__line-header').style.display = 'block';
	document.querySelector('.navbar__line').classList.remove('scrollingHeader');
	document.querySelector('.scrollingBlockHidden').style.height = 0 +'px';
	}
}

