var tl;
$( function () {
	function hover(){
		var hoverTimeline = gsap.timeline({paused:true})
			.to(".logo", {scale:1.1, duration:.6,ease: "back.inOut(3)"})
		;
		
		$("#stage").mouseenter( function() {hoverTimeline.play();});
		$("#stage").mouseleave( function() {hoverTimeline.reverse();});
	}


	 tl = gsap.timeline({delay: 0.4, onComplete:hover, paused:true})
		.set('.hiddenOnload',{opacity:1})
	;

} );