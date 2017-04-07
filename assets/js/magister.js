// global. currently active menu item
var current_item = 0;

// few settings
var section_hide_time = 1300;
var section_show_time = 1300;

var clipboard = new Clipboard('.em');

$('.em').tooltip({
  trigger: 'click',
  placement: 'right'
});

function setTooltip(message) {
  $('.em').tooltip('hide')
    .attr('data-original-title', message)
    .tooltip('show');
}

function hideTooltip() {
  setTimeout(function() {
    $('.em').tooltip('hide');
  }, 1000);
}

clipboard.on('success', function(e) {
  setTooltip('Copied!');
  hideTooltip();
});

clipboard.on('error', function(e) {
  setTooltip('Failed!');
  hideTooltip();
});

// jQuery stuff
jQuery(document).ready(function($) {

	// Switch section
	$("a", '.mainmenu').click(function()
	{
		if( ! $(this).hasClass('active') ) {
			current_item = this;
			// close all visible divs with the class of .section
			$('.section:visible').fadeOut( section_hide_time, function() {
				$('a', '.mainmenu').removeClass( 'active' );
				$(current_item).addClass( 'active' );
				var new_section = $( $(current_item).attr('href') );
				new_section.fadeIn( section_show_time );
			} );
		}
		return false;
	});
});
