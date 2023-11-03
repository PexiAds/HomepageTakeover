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
var play = 0;
var sendingLoaded;
var received_1 = false;
var received_2 = false;
var loaded_myself = false;

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



$(window).on("load", function(){
	sendingLoaded = setInterval(function(){
		loaded_myself = true;
		checkClearInterval();
		PEXI.message('left_loaded');
	},50)
})


function checkClearInterval(){
	if(received_1 && received_2 && loaded_myself){
		clearInterval(sendingLoaded);
		PEXI.message('ready_to_play');
	}
}
PEXI.receiveMessages(function(){
	if(data == 'received_left_loaded__top'){
		received_1 = true
		checkClearInterval()
	} else if(data == 'received_left_loaded__right'){
		received_2 = true
		checkClearInterval()
	} else if(data == 'right_loaded'){
		PEXI.message('received_right_loaded__left');
	} else if(data == 'top_loaded'){
		PEXI.message('received_top_loaded__left');
	} else if(data == 'ready_to_play'){
		play++;
		if(play == 3){
			tl.play();
		}
	}
});

