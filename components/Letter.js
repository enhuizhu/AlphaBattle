'use strict';

class Letter {
	constructor(x, y, str, ctx) {
		this.x = x;
		this.y = y;
		this.str = str;
		this.ctx = ctx;
	}

	setFontStyle(cofig) {
		this.ctx.font = config.font || '13px serif';
	}

	draw() {
		ctx.fillText(this.str, this.x, this.y);
	}
}

// export default Letter;