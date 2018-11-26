window.onload = function() {
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;
    
    context.beginPath();
    context.moveTo(width/2,0);
    context.lineTo(width/2,height);
    context.stroke();
    
    for(var i = 0; i < 100 ;i++) {
        var heads = Math.random() < 0.4,
            y=Math.random() * height;
            x = Math.random() *width / 2;
        
        if(heads){
            x += width/2;
        }
        context.beginPath();
        context.arc(x,y,20,0,Math.PI * 2 );
        context.fill();
    }
    

	
}