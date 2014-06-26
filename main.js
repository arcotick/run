
var w = window.innerWidth;
	h = window.innerHeight;

var r = 50;

var ball = document.getElementById('ball');
var wallT = document.getElementById('wallTop');
var wallB = document.getElementById('wallBottom');

ball.style.left = (w-r)/2 + 'px';
ball.style.top = h - r + 'px';
ball.style.width = ball.style.height = r + 'px';

var started = false,
	finished = false;

var time = 0, abstime = 0, t;
var altura, random;

window.onload = function(){
	setInterval(
		function(){
			if (abstime % 2000 == 0) {
				random = Math.random();
			}
			generateWall(((abstime%2000)-1)/2000, random*(h-4*r)/h + 2*r/h);
			if(started && !finished){
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
}
function generateWall(t, random) {
	wallT.style.top = random*h-h - 2*r + 'px';
	wallB.style.top = random*h + 2*r + 'px';
	wallB.style.left = wallT.style.left = w-t*(w+r) + 'px';
}
var overlaps = (function () {
    function getPositions( elem ) {
        var pos, width, height;
        pos = $( elem ).position();
        width = $( elem ).width() / 2;
        height = $( elem ).height();
        return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
    }

    function comparePositions( p1, p2 ) {
        var r1, r2;
        r1 = p1[0] < p2[0] ? p1 : p2;
        r2 = p1[0] < p2[0] ? p2 : p1;
        return r1[1] > r2[0] || r1[0] === r2[0];
    }

    return function ( a, b ) {
        var pos1 = getPositions( a ),
            pos2 = getPositions( b );
        return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
    };
})();
window.addEventListener('mousedown', mouseDown)