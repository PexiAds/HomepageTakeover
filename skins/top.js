var tl;
var play = 0;
var sendingLoaded;
var received_1 = false;
var received_2 = false;
var loaded_myself = false;
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


$(window).on("load", function(){
	sendingLoaded = setInterval(function(){
		loaded_myself = true;
		checkClearInterval();
		PEXI.message('top_loaded');
	},50)
})

function checkClearInterval(){
	if(received_1 && received_2 && loaded_myself){
		clearInterval(sendingLoaded);
		PEXI.message('ready_to_play');
	}
}
PEXI.receiveMessages(function(){
	if(data == 'received_top_loaded__right'){
		received_1 = true
		checkClearInterval()
	} else if(data == 'received_top_loaded__left'){
		received_2 = true
		checkClearInterval()
	} else if(data == 'left_loaded'){
		PEXI.message('received_left_loaded__top');
	} else if(data == 'right_loaded'){
		PEXI.message('received_right_loaded__top');
	} else if(data == 'ready_to_play'){
		play++;
		if(play == 3){
			tl.play();
		}
	}
});
