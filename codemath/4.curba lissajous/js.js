window.onload=function(){
    var canvas = document.getElementById("canvas"),
    context=canvas.getContext("2d"),
    width=canvas.width=window.innerWidth,
    height=canvas.height=window.innerHeight;
    
    centerX= width/2,
    centerY=height/2,
    xRadius=200,
    yRadius=100,
    xangle=0,
    yangle=0
    xspeed=.1,
    yspeed=.131;
    
    
    render();
    
    function render() {
        
        context.clearRect(0,0,width,height);
        x=centerX+Math.cos(xangle)*xRadius;
        y=centerY+Math.sin(yangle)*yRadius;
        context.beginPath();
        context.arc(x,y,10,0,Math.PI*2,false);
        context.fill();
        
        xangle+=xspeed;
        yangle+=yspeed;
        requestAnimationFrame(render);
    }
    
    
};