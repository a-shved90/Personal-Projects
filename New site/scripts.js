// TODO if local link opacity change on page load for smooth loading

document.addEventListener("click", function(event){
	var el = event.target;

	if ( el.classList.contains("more") ) {
		var sibling = el.nextElementSibling;
		if (sibling.className == "hide"){
			el.classList.add("active");
			sibling.className = "show";
		} else {
			sibling.className = "hide";
			el.classList.remove("active");
		}
		
	}


});

window.addEventListener("load", function load(event){
	if (document.getElementById('timer') > 0){
		workCounter.init();  
	}
	window.removeEventListener("load", load, false);
},false);

var workCounter = {
	init: function() {
		var timer = document.getElementById('timer');
		var startDate = new Date(2013,9,7).getTime(); // month starts at 0 for some reason, while everything else starts at 1
		var currentDate = Date.now();
		var dateDifference = Math.round((currentDate - startDate) / 86400000); // 86400000 = one day
		var workingHours = Math.round((dateDifference + 220)/7*5*0.91*24/7.5); // 220 is my placement year, /7*5 substracts weekends, 0.91 substracts ~30 days holidays, *24/7.5 gets number of working hours in a day

		timer.textContent = workingHours + ' hours';
	}
};

	
// Event.observe(document,'click',function(event){
// 	var el = $(event.target);

// 	if ( el.hasClassName('open') || el.up('.open') ) {
// 		var body = $$('body')[0];
// 		if ( body.hasClassName('nav-open') ) {
// 			body.removeClassName('nav-open');
// 		} else {
// 			body.addClassName('nav-open');
// 		}
// 	}
// 	if ( el.hasClassName('close') || el.up('.close') ) {
// 		var body = $$('body')[0];
// 		if ( body.hasClassName('nav-open') ) {
// 			body.removeClassName('nav-open');
// 		}
// 	}

// 	if (el.hasClassName('scroll-top')) {
// 		document.body.scrollTop = document.documentElement.scrollTop = 0;
// 	}
// });

// Event.observe(document,'scroll',function(event){
// 	var doc = document.documentElement;
// 	var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);

// 	if ( top > 100 ) {
// 		$$('header')[0].addClassName('scrolled');
// 	} else {
// 		$$('header')[0].removeClassName('scrolled');
// 	}
	
// });


// document.addEventListener( 'DOMContentLoaded', function () {	
// 	if ( $('page').getHeight() < ( document.viewport.getHeight() - $('footer').getHeight() ) ) {
// 		$$('header')[0].addClassName('scrolled');
// 	}	
// });

// Event.observe(window,'resize',function(event){
// 	if ( $$('body')[0].hasClassName('nav-open')) {
// 		$$('body')[0].removeClassName('nav-open');
// 	}
// });
