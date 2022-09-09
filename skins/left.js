//scale the div with name #scale
// pexi.fullScale( '#scale','#stage' );
// window.onresize = function () {
//   pexi.fullScale( '#scale','#stage' );
// };

$( function () {
	function hover(){
		function hoverIn() {
		}
		//hover out animaties hier
		function hoverOut() {	
		}
		//hover in en out functies worden aangeroepen bij hover op #stage
		$('#stage').hover(hoverIn, hoverOut);
	}


	var tl = new TimelineMax({delay: 0.4, onComplete:hover})
		.set('.hiddenOnload',{opacity:1})
	;




} );