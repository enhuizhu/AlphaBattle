'use strict';

const textConfig = {
	font: '13px serif'
};
const game = document.getElementById('game');
const ctx = game.getContext('2d');

let testLetter = new Letter(9, 0, ctx);
let children = [];

function clearCanvas() {
	ctx.clearRect(0, 0, game.width, game.height);
}

window.requestAnimationFrame(() => {
	console.log('hello');
	const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
	clearCanvas();
	testLetter.y ++;
	testLetter.draw();

	console.log(testLetter.y);
});