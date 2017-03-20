'use strict';

import gameChild from '../components/Letter';
import notificationsService from '../services/NotificationsService';
import events from '../constants/events';

class Bullet extends gameChild {
    constructor(x, y, target) {
        super();
        this.x = x;
        this.y = y;
        this.radius = 10;
        this.speed = 6;
        this.target = target;
    }

    setSpeed(speed) {
        this.speed = speed;
    }

    isCollision() {
        return this.y < this.target.y;
    }

    draw() {
        if (this.y < 0) {
            notificationsService.pub(events.BULLET_TOUCH_BORDER, this);
            return ;
        }
        
        this.y -= this.speed;

        this.ctx.beginPath();
        this.ctx.save();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = 'green';
        this.ctx.fill();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#003300';
        this.ctx.stroke();
        this.ctx.restore();
        
        if (this.isCollision()) {
            notificationsService.pub(events.COLLISION, [this, this.target]);
        }
    }
}

export default Bullet;