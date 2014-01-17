$(document).ready(function() {
	
    var answer = Math.floor((Math.random()*30)+1);
	
	$('#guess').keypress(function(event) {
        if(event.keyCode==13){
			$('#submit').click();
		}
	});

	$('#submit').click(function() {
		var guess = $('#guess').val();
		
		if(guess >= 31 || guess <= 0) {
			$('#result').text("Number must be between 1 and 30.");
			return false;
		};
		
		if(isNaN(guess)) {
			$('#result').text("Not sure what you entered, but it's not a number.");
		};

		var diff = Math.abs(guess - answer);

		if(diff == 0 )	{
			$('#result').text("That is correct!!");
		}

		else if(diff <= 5) {
			$('#result').text("Hot!");
		}

		else if(diff > 5) {
			$('#result').text("Cold..");
		};
		
	});
	$('#reset').click(function(){
		location.reload();
		});
});