$(document).ready(function() {
	
    var answer = Math.floor((Math.random()*30)+1);
    
	
	$('#guess').keypress(function(event) {
        if(event.keyCode==13){
			$('#submit').click();
		}
	});

	$('#submit').click(function() {
		var guess = $('#guess').val();
		$('#guess').val('');
		var diff = Math.abs(guess - answer);
		switch(true) {
			case (guess >= 31 || guess <= 0) :
				$('#result').text("Number must be between 1 and 30.");
				return false;
				break;
			case (isNaN(guess)) :
				$('#result').text("Not sure what you entered, but it's not a number.");
				break;
			case (diff == 0 ) :
				$('#result').text("That is correct!!");
				break;
			case (diff <= 5) :
				$('#result').text("Hot!");
				break;
			case (diff > 5) :
				$('#result').text("Cold..");
				break;				
			default : 
		};
		
	});
	$('#reset').click(function(){
		location.reload();
		});
});
