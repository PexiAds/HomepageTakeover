

$( function () {
	function hover(){
		var hoverTimeline = gsap.timeline({paused:true})
		    .to(".cta", {scale:1.1, duration:.6,ease: "back.inOut(3)"})
		;
		
		$("#stage").mouseenter( function() {hoverTimeline.play();});
		$("#stage").mouseleave( function() {hoverTimeline.reverse();});
	}


	var tl = new TimelineMax({delay: 0.4, onComplete:hover})
		.to('.hiddenOnload',{opacity:1,duration:.3})

	
	;




} );