!function(){var e=document.querySelector(".btn__menu"),t=document.querySelector(".navbar");e.addEventListener("click",function(){t.classList.toggle("active-bar"),e.classList.toggle("active-burger")})}(),window.onscroll=function(){80<window.pageYOffset?(document.querySelector(".top__line-header").style.display="none",document.querySelector(".navbar__line").classList.add("scrollingHeader"),document.querySelector(".scrollingBlockHidden").style.height="150px"):(document.querySelector(".top__line-header").style.display="block",document.querySelector(".navbar__line").classList.remove("scrollingHeader"),document.querySelector(".scrollingBlockHidden").style.height="0px"),800<window.pageYOffset?document.querySelector(".to-top").classList.add("active"):document.querySelector(".to-top").classList.remove("active")},document.querySelector(".to-top").addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}),$(".scrollTo").click(function(){return $("html, body").animate({scrollTop:$($(this).attr("href")).offset().top-68},500),!1});