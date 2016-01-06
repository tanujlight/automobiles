$(document).on('page:change', function(){

	// Call Slider
	// slider(slider_handle, autoplay, timeIntervalInSeconds)
	// Uncomment the below line and change the values as needed.
	 slider('.technology', true, 6);
	 slider('.model', true, 6);
	 slider('#main-page', true, 6);
	 slider('.features', true, 6);


});

function slider(slider_handle, autoplay, timeIntervalInSeconds) {
	
	// Setting Defaults
	var slider = $(slider_handle);
	var clearSliderInterval = false;
	timerInMilliSeconds = timeIntervalInSeconds * 1000;	
	slider.find('ul.slider-items li').not(':first-child').addClass('next');
	slider.find('ul.slider-items li:first-child').addClass('cur');
	
	// On left arrow click
	slider.find('.slider-arrows .left-arrow').click(function() {
		
		// Clear Slider Interval
		clearInterval(clearSliderInterval);

		current = $(this).parents('.slider').find('ul.slider-items li.cur');

		if(current.is(':first-child')) {
			return false;
		}

		current.removeClass('cur').addClass('next');
		current.prev().removeClass('prev').addClass('cur');

		// Move the dot backward
		active = $(this).parents('.slider').find('ul.slider-nav li.active');
		active.removeClass('active');
		active.prev().addClass('active');
		
		return false;
	});

	// On right arrow click
	slider.find('.slider-arrows .right-arrow').click(function() {
		
		current = $(this).parents('.slider').find('ul.slider-items li.cur');

		// Clear Slider Interval
		if(clearSliderInterval) {
			current.prevAll().removeClass('prev cur next').addClass('prev');
			current.nextAll().removeClass('prev cur next').addClass('next');
			clearInterval(clearSliderInterval);
			clearSliderInterval = 0;
		}

		if(current.is(':last-child')) {
			return false;
		}

		current.removeClass('cur').addClass('prev');
		current.next().removeClass('next').addClass('cur');

		// Move the dot forward
		active = $(this).parents('.slider').find('ul.slider-nav li.active');
		active.removeClass('active');
		active.next().addClass('active');

		return false;
	});

	// On dots/circles
	// Defaults
	slider.find('ul.slider-nav li:first-child').addClass('active');
	slider.find('ul.slider-nav li a').click(function() {
		return false;
	});

	// Autoplay Settings
	if(autoplay) {
		clearSliderInterval = setInterval(function() {
		
			current = slider.find('ul.slider-items li.cur');

			if(current.next().is(':last-child')) {
				current.prevAll().removeClass('prev').addClass('next');

				current.removeClass('cur').addClass('prev');
				current.next().removeClass('next').addClass('cur');

				// Move the dot forward
				active = slider.find('ul.slider-nav li.active');
				active.removeClass('active');
				active.next().addClass('active');

			} else if(current.is(':last-child')) {
				slider.find('ul.slider-items li:last-child').removeClass('cur').addClass('prev');
				slider.find('ul.slider-items li:first-child').removeClass('next').addClass('cur');
				
				setTimeout(function() {
					slider.find('ul.slider-items li:last-child').removeClass('prev').addClass('next');
					slider.find('ul.slider-items li:last-child').prev().removeClass('prev').addClass('next');
				}, timerInMilliSeconds);

				// Move the dot to first
				slider.find('ul.slider-nav li.active').removeClass('active');
				slider.find('ul.slider-nav li:first-child').addClass('active');

			} else {
				current.removeClass('cur').addClass('prev');
				current.next().removeClass('next').addClass('cur');

				// Move the dot forward
				active = slider.find('ul.slider-nav li.active');
				active.removeClass('active');
				active.next().addClass('active');
			}
		}, timerInMilliSeconds);
	}
}