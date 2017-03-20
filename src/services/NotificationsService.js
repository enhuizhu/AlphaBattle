'use strict';

class NotificationsService {
	static sub(eventName, cb) {
		if (!this.events) {
			this.events = {};
		}

		if (!this.events[eventName]) {
			this.events[eventName] = [];
		}

		this.events[eventName].push(cb);
	}


	static pub(eventName, obj) {
		for(let k in this.events) {
			if (k === eventName) {
				this.events[k].map(cb => {
					cb(obj);
				});

				break;
			}
		}
	}
}

export default NotificationsService;	