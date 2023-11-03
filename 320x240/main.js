$( function () {
		function hover(){
			var hoverTimeline = gsap.timeline({paused:true})
		
			;
			
			$("#stage").mouseenter( function() {hoverTimeline.play();});
			$("#stage").mouseleave( function() {hoverTimeline.reverse();});
		}


		var tl = new TimelineMax({delay: 0.4,  onComplete:hover, paused:true})
			.to('.hiddenOnload',{opacity:1,duration:.3})

		;


		PEXI.inView(function(){
			tl.play()
		});


		
});