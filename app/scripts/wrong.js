/* -*- Mode: Java; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */

'use strict';
(function($){
	// function to convert degress to radians
	var rad = function(angle) {
		return angle * Math.PI / 180;
	};
	
	// all cubes use the same angle to rotate per iteration
	var angle = 0; 
	
	// the default direction for cube is clockwise. Direction 
	// is inversed for cubes in non-prime order
	var direction = 0;
	
	// collection of all cubes
	var cubes = $('.cube');
	
	var step = 5;
	setInterval(function(){
		angle = angle + step;
		if (angle % 90 == 0) {
			angle = 0;
		}
		// adjust rotation and translate position from bottom to top.
		$($('.cube').get().reverse()).each(function(i, element){
			var cube = $(element), direction = i % 2 == 0 ? 1 : -1;
			var marginLeft = 0, paddingBottom = 0;
			if (angle !== 0) {
				var size = cube.outerWidth();
				// calculate X translate
				marginLeft = -Math[direction === -1 ? 'cos' : 'sin'](rad(angle)) * size;
				if (direction == -1) {
					marginLeft += size;
				}
				// calculate Y translate
				var bottom = Math[angle <= 45 ? 'sin' : 'cos'](rad(angle)) * size + Math[angle >= 45 ? 'sin' : 'cos'](rad(angle)) * size - size;
				paddingBottom = i * bottom;
			}

			var cubeAngle = angle * direction;
			cube.css({
				// should probably add all prefixes etc, but for 
				'transform' : 'rotate(' + cubeAngle + 'deg)',
				'transform-origin': direction == 1 ? '100% 100%' : '0% 100%', 
				'margin-left': marginLeft + 'px', 
				'bottom' : paddingBottom + 'px'
			});
		});
	}, 50);
	
	// right hand side
	var cubeContainer = $('.cube-container'), background = $('.background'), shareButton = $('fb\\:share-button');
	$(".colorpicker").ColorPickerSliders({
		color: window.location.hash || '#333333',
        flat: true,
        sliders: false,
        swatches: false,
        hsvpanel: true,
        onchange: function(element, color) {
        	var hex = '#' + color.tiny.toHex();
        	cubeContainer.css('border-color', hex);
        	background.css('background-color', hex);
        	
        	window.location.hash = hex;
        	
        	// this would be used if the FB button is not yet initialized
        	shareButton.attr('href', window.location.href);
        	
        	// this is a dirty hack to refresh URL for the button
        	if (shareButton.find('[src]').size() !== 0) {
        		var element = shareButton.find('[src]'), uri = encodeURIComponent(window.location.href);
        		element.attr('src', 
        			element.attr('src').replace(/href=(.[^&]*)/, 'href=' + uri));
        	}
        }
    });
})(jQuery);
