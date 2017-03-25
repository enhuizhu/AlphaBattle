'use strict';

import gameChild from '../common/gameChild';
import notificationsService from '../services/NotificationsService';
import events from '../constants/events';

class Letter extends gameChild {
    constructor(x, y, str, config) {
        super();
        this.x = x;
        this.y = y;
        this.str = str;
        this.textConfig = config;
        this.speed = 0.5;
    }

    setFontStyle(config) {
        this.ctx.font = config.font || '13px serif';
        this.ctx.fillStyle = config.color || 'white';
    }

    draw() {
        if (this.y >= this.canvas.height) {
            notificationsService.pub(events.LETTER_TOUCH_GROUND, this);
            return ;
        }

        this.setFontStyle(this.textConfig);
        this.y += this.speed;
        this.ctx.fillText(this.str, this.x, this.y);
    }
}

export default Letter;