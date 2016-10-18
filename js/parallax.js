
$(document).ready(function() {
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
});

/* Scroll the background layers
	- minus: up
	- plus: down
*/
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	var maison = $('#parallax_maison');
	var maison_desc = $('#maison_description');
	// console.log(maison.position().top);
	// console.log(scrolled);

	if((scrolled + 300 >= maison.position().top) ) {
		$('#maison_desc_wrap').css('top',(-maison.position().top*.73+(scrolled*0.78))+'px');
	}

	$('#parallax-bg1').css('top',(0-(scrolled*.1))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.25))+'px');
	$('.parallax_item').css('top',(-75+(scrolled*.2))+'px');
	$('.parallax_review').css('top',(300-(scrolled*.2))+'px');


}
