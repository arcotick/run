
var w = window.innerWidth;
	h = window.innerHeight;

var r = 50;

var ball = document.getElementById('ball');
var wallT = document.getElementById('wallTop');
var wallB = document.getElementById('wallBottom');

ball.style.left = (w-r)/2 + 'px';
ball.style.top = h - r + 'px';
ball.style.width = ball.style.height = r + 'px';

var started = false;

var time = 0, abstime = 0, t;
var altura, random;

window.onload = function(){
	ball.style.left = 0 + 'px';
	setInterval(
		function(){
			if (abstime % 2000 == 0) {
				random = Math.random();
			}
			generateBlock(((abstime%2000)-1)/2000, random*(h-4*r)/h + 2*r/h);
			if(started){
				abstime += 10;
				time+=10;
				t=time/100;
				ball.style.top = h-r - (150*t-40*t*t) - altura + 'px';
			}
			if (parseInt(ball.style.top) > h-r) {
				ball.style.top = h-r + 'px';
			}
		},
		10)
}
var mouseDown = function() {
	started = true;
	altura = h-r-parseInt(ball.style.top);
	time = 0;
	bounce = 0;
}
function generateBlock(t, random) {
	wallT.style.top = random*h-h - 2*r + 'px';
	wallB.style.top = random*h + 2*r + 'px';
	wallB.style.left = wallT.style.left = w-t*(w+r) + 'px';
}
window.addEventListener('mousedown', mouseDown)