window.onload = function() {
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;
    
    var rules= [{
        a: 0.85,
        b: 0.04,
        c: -0.04,
        d: 0.85,
        tx: 0,
        ty: 1.6,
        weight: 0.85
    },
    {
     a: -0.15,
     b: 0.28,
     c: 0.26,
     d: 0.24,
     tx: 0,
     ty: 0.44,
     weight: 0.07
    },
    {
        a: 0.2,
        b: -0.26,
        c: 0.23,
        d: 0.22,
        tx: 0,
        ty: 1.6,
        weight: 0.07
    },
    {
        a: 0,
        b: 0,
        c: 0,
        d: 0.16,
        tx: 0,
        ty: 0,
        weight: 0.01  
    }];
var x=Math.random();
    y=Math.random();

context.translate(width/2,height);
iterate();
    
function iterate() {
    for(var i=0;i<100;i++){
    var rule= getRule(),
    x1= x * rule.a + y * rule.b + rule.tx,
    y1= x * rule.c + y * rule.d + rule.ty;
 x=x1;
 y=y1;
 plot(x,y);
}
    requestAnimationFrame(iterate);
}
    
    function getRule() {
        var rand= Math.random();
        for(var i =0;i<rules.length;i++){
            var rule=rules[i];
            if(rand<rule.weight){
                return rule;
            }
        rand -= rule.weight;
        }   
    }
function plot(x,y){
    context.fillRect(x*50,-y*50,0.5,0.5);
}
	
}