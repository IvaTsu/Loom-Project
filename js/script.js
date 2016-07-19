$(document).ready(function () {
	$(".intro-slider").slick({
	 	infinite: true
  	});

	$(".process-section-image").mouseout(function() {
		this.src = this.getAttribute("data-before");
	});
	$(".process-section-image").mouseover(function() { 
		this.src = this.getAttribute("data-after"); 
 	});
	
	$(".customer-reply").slick({
	 	infinite: true,
	 	dots: true
  	});

		
	$('.navbar-list').slicknav({
		prependTo: ".mobile-menu",
		label: ""
	});

	
	
});