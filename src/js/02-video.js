
import Player from '@vimeo/player';
const _ = require('lodash');

const iframe = document.querySelector('#vimeo-player');
    const player = new Player(iframe);

   const videoCurrentTime = (currentTime) => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime.seconds));
    
}

    player.on('timeupdate', _.throttle(videoCurrentTime, 1000));

    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'))
        .then(function(seconds) {})
        .catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
    
            default:
                break;
        }
    });