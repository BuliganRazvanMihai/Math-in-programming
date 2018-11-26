window.onload = function() {
	var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;
    
    var rules= [{
        a: 0.05,
        b: 0,
        c: 0,
        d: 0,
        tx: 0,
        ty: 0,
        weight: 0.17
    },
    {
     a: 0.05,
     b: 0,
     c: 0,
     d: -0.5,
     tx: 0,
     ty: 1,
     weight: 0.17
    },
    {
        a: 0.46,
        b: -0.321,
        c: 0.386,
        d: 0.383,
        tx: 0,
        ty: 0.6,
        weight: 0.17
    },
    {
        a: 0.47,
        b: -0.154,
        c: 0.171,
        d: 0.423,
        tx: 0,
        ty: 1.1,
        weight: 0.17  
    },
     {
        a:0.433,
        b:0.275,
        c:-0.25,
        d:0.476,
        tx: 0,
        ty: 1,
        weight:0.16
         
     },
    {
        a:0.421,
        b:0.257,
        c:-0.353,
        d:0.306,
        tx: 0,
        ty: 0.7,
        weight:0.16
     }
               ];
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
    context.fillRect(x*350,-y*350,0.5,0.5);
}
	
}