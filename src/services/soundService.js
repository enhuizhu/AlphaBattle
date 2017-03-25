'use strict';

const sounds = {
	'explosion' : new Audio('./assets/sounds/explosion.mp3')
}

class SoundService {
	static play(soundName) {
		if (sounds[soundName]) {
			let sound = new Audio('./assets/sounds/explosion.mp3');
			sound.play();
		}
	}
}

export default SoundService;