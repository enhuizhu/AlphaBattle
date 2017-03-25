'use strict';

import _ from 'lodash';
import lettersService from './services/LettersService';
import notificationsService from './services/NotificationsService';
import soundService from './services/SoundService';
import bullet from './components/Bullet';
import events from './constants/events';

class Game {
    constructor(selector, width, height) {
        this.canvas = document.querySelector(selector);
        this.width = width;
        this.height = height;
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasSize(width, height);
        this.children = [];
        this.numberOfLettersInGroup = 3;
        this.generateLetters();
        this.setEvents();
    }

    setEvents() {
        notificationsService.sub(events.COLLISION, this.onCollision.bind(this));
        notificationsService.sub(events.LETTER_TOUCH_GROUND, this.objTouchBorder.bind(this));
        notificationsService.sub(events.BULLET_TOUCH_BORDER, this.objTouchBorder.bind(this));

        document.addEventListener('keypress', this.onKeyPress.bind(this));
    }

    onCollision(objs) {
        soundService.play('explosion');

        objs.map(obj => {
            this.destoryChild(obj);
        });

        this.generateLetters();
    }

    objTouchBorder(obj) {
        this.destoryChild(obj);

        this.generateLetters();
    }

    onKeyPress(e) {
        this.children.map((v) => {
            if (v.str && v.str.toLowerCase() == e.key) {
                this.fire(v);
            };
        })
    }

    fire(v) {
        this.addChild(new bullet(v.x + this.ctx.measureText(v.str).width/2, this.height, v));
    }

    generateLetters() {
        if (_.isEmpty(this.children)) {
            for(let i = 0; i < this.numberOfLettersInGroup; i++ ) {
                this.addChild(lettersService.generateRandomLetter(this.width, this.ctx));               
            }
        }
    }

    setCanvasSize(width, height) {
        this.canvas.setAttribute('width', width);
        this.canvas.setAttribute('height', height);
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    addChild(child) {
        child.setCtx(this.ctx);
        child.setId(_.uniqueId());
        child.setCanvas(this.canvas);
        this.children.push(child);
    }

    destoryChild(child) {
        this.children = this.children.filter((v) => {
            return child.id !== v.id;
        })
    }

    render() {
        this.clearCanvas();

        this.children.map((child) => {
            child.draw();
        });

        requestAnimationFrame(this.render.bind(this));
    }
}

export default Game;