(function(){

	var btnMenu = document.querySelector('.btn__menu');
	var menu = document.querySelector('.navbar');

	btnMenu.addEventListener('click', function(){
		menu.classList.toggle('active-bar');
		btnMenu.classList.toggle('active-burger');
	});
})();
