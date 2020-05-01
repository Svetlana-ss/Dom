$(document).ready(function() {
	$(".slide-one").owlCarousel({
		loop:true,
		items: 1,
		margin:130,
		autoplay:true,
        autoplayTimeout:1500,
        autoplaySpeed: 3000,
	    autoplayHoverPause:true,
		stagePadding: 130,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav',
		responsive: {
	    // > 0
	    0 : {
	      dots: false,
	      margin:30,
	      stagePadding: 30,
	    },
	    // > 768
	    768 : {
	    	margin:130,
	    	stagePadding: 130,
        dots: true,
	    }
		}
	});
	$(".slide-two").owlCarousel({
		loop:true,
		items: 5,
		center: true,
		dotsEach: true,
		margin:40,
		autoplayHoverPause: true,
		autoplay:true,
        autoplayTimeout:1500,
        autoplaySpeed: 3000,
		stagePadding: 60,
		nav: true,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		navContainer: '#customNav-two',
		responsive: {
	    // > 0
	    0 : {
			items: 1,
	      	dots: false,
			margin:30,
			stagePadding: 30,
	    },
	    // > 768
	    768 : {
			items: 3,
	    	margin: 30,
	    	stagePadding: 30,
        	dots: true,
		},
		1210 : {
			items: 5,
	    	margin: 30,
	    	stagePadding: 30,
        	dots: true,
	    }
		}
	});
});