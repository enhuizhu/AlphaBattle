'use strict';

import letter from '../components/Letter';
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const textConfig = {
	font: '30px serif',
	color: 'white'
};

class LettersService {
	static get() {
		return letters[Math.round(Math.random() * (letters.length - 1))];
	}

	static generateRandomLetter(width, ctx){
		let alphaBet = this.get();
		let letterWidth = ctx.measureText(alphaBet).width;
		let x = Math.round(Math.random() * width) - letterWidth;

		if (x < 0) {
			x = 0;
		}
		
		return new letter(x, 50, alphaBet, textConfig);
	}
}

export default LettersService;