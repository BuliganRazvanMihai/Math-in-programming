window.onload=function(){
    var canvas = document.getElementById("canvas"),
    context=canvas.getContext("2d"),
    width=canvas.width=window.innerWidth,
    height=canvas.height=window.innerHeight;
    
    centerX= width/2,
    centerY=height/2,
    xRadius=200,
    yRadius=100,
    angle=0,
    speed=.02;
    
    
    render();
    
    function render() {
        
        context.clearRect(0,0,width,height);
        x=centerX+Math.cos(angle)*xRadius;
        y=centerY+Math.sin(angle)*yRadius;
        context.beginPath();
        context.arc(x,y,10,0,Math.PI*2,false);
        context.fill();
        
        angle+=speed;
        requestAnimationFrame(render);
    }
    
    
};