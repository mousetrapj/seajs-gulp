(function() {
    var canvas = $("#mainCanvas")[0];
    var context = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
        context.strokeStyle="#ff9900";
		context.lineWidth = 10;

		//left line
		var left_start_x = window.innerWidth / 2 - 350;
		var left_end_x = window.innerWidth/2 + 45;
		var left_y = window.innerHeight/2 - 55;

		context.moveTo(left_start_x,left_y);
		context.lineTo(left_end_x,left_y);
		context.stroke();

		//right line
		var right_start_x = window.innerWidth / 2 - 45;
		var right_end_x = window.innerWidth/2 + 350;
		var right_y = window.innerHeight/2 + 55;

		context.moveTo(right_start_x,right_y);
		context.lineTo(right_end_x,right_y);
		context.stroke();

		//top line
		var top_start_y = window.innerHeight / 2 + 45;
		var top_end_y = window.innerHeight/2 - 350;
		var top_x = window.innerWidth/2 + 55;

		context.moveTo(top_x,top_start_y);
		context.lineTo(top_x,top_end_y);
		context.stroke();

		//bottom line
		var bottom_start_y = window.innerHeight / 2 - 45;
		var bottom_end_y = window.innerHeight/2 + 350;
		var bottom_x = window.innerWidth/2 - 55;

		context.moveTo(bottom_x,bottom_start_y);
		context.lineTo(bottom_x,bottom_end_y);
		context.stroke();
    }
})();