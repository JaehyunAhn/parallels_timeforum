
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
	var maison2_bottom = $('#parallax_maison2').position().top + $('#parallax_maison2').offset().top + $('#parallax_maison2').outerHeight(true);
	var maison_desc = $('#maison_desc_wrap');
	// console.log(maison_desc.position().top);
	// console.log(scrolled);
	// console.log($('#parallax_maison2').position().top);
	// console.log($('#maison_description').position().top);

	if((scrolled + 300 >= maison.position().top) ) {
		if(scrolled <= $('#parallax_maison2').position().top + 300) {
			maison_desc.css('top',(-maison.position().top*.73+(scrolled*0.78))+'px');
		}

	}

	$('#parallax-bg1').css('top',(0-(scrolled*.6))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*1.45))+'px');
	$('.parallax_item').css('top',(-75+(scrolled*.2))+'px');
	$('.parallax_review').css('top',(300-(scrolled*.2))+'px');

}
