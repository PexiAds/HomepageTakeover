//scale the div with name #scale
// pexi.fullScale( '#scale','#stage' );
window.onresize = function () {
	setBottom()
//   pexi.fullScale( '#scale','#stage' );
};

function setBottom() {
	var screenHeight;
	if (!PEXI.data.skin) {
		scrollDepth = 0;
		offset = 0;
		screenHeight = 1080;
	} else {
		scrollDepth = PEXI.data.skin.scrollDepth;
		offset = PEXI.data.skin.offset;
		screenHeight = PEXI.data.skin.screenHeight;
	}

	var currentHeight = window.innerHeight



	if (currentHeight < screenHeight) {
		$('#stage').css('max-height', '100%');
	} else {
		$('#stage').css('max-height', (screenHeight) + 'px');
	}
}

var tl;
$( function () {
	setTimeout(function(){
		setBottom()
	  },500)
	function hover(){
		var hoverTimeline = gsap.timeline({paused:true})
			.to(".logo", {scale:1.1, duration:.6,ease: "back.inOut(3)"})
		;
		
		$("#stage").mouseenter( function() {hoverTimeline.play();});
		$("#stage").mouseleave( function() {hoverTimeline.reverse();});
	}


	tl = gsap.timeline({delay: 0.4, onComplete:hover,paused:true})
		.set('.hiddenOnload',{opacity:1})
	;


} );