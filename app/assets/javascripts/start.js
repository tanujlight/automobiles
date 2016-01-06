$(document).on('page:change', function(){

	// header menu drop-down

	$("header menu li.brands").click(function(e){
		$("header menu li .brands-dropdown").slideToggle('slow');
		return false();
		e.preventDefault();

	});

});