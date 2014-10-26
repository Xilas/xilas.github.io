$(document).ready(function() {
	
	// TOC, shows how to scroll the whole window
	$('.toc a').click(function(){
		$.scrollTo( this.hash, 1500, { easing:'swing' });
		return false;
	});
	
});