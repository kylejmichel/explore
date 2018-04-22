$(document).ready(function () {
	
	
	$('#burger').click(function () {
	  $('body').toggleClass('menuMargin');
	  });
	
	
	$('a[href*="#"]')
	
	
	.not('[href="#"]')
	
	
	.not('[href="#0"]')
	
	
	.click(function(event) {
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  if (target.length) {
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top
			}, 1000, function() {
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) {
				return false;
			  } else {
				$target.attr('tabindex','-1'); 
				$target.focus(); 
			  };
			});
		  }
		}
	  });	
	
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$("nav").addClass("headerScroll");
		} else {
			$("nav").removeClass("headerScroll");
    }
});
	

$(function() {
  $('nav li a[href="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});


});

  function car(){
    this.speed = 135;
    setInterval( () => {
      this.speed++;
      document.getElementById("status").innerHTML = this.speed;
    }, 1000);
    
  }

 var car1 = new car();