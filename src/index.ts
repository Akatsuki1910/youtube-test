const init = () => {
  const domReady = document.getElementById('ready');
  const domState = document.getElementById('state');
  const domQuality = document.getElementById('quality');
  const domRate = document.getElementById('rate');

  domReady.innerHTML = 'false';
  domRate.innerHTML = '1';

  const origin = location.protocol + '//' + location.hostname + '/';
  const movieId = 'csrP6E9lUuY';

  const player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: movieId,
    playerVars: {
      enablejsapi: 1,
      origin: origin,
      modestbranding: 1,
      fs: 0,
      rel: 0,
    },
    events: {
      onReady: () => {
        domReady.innerHTML = 'true';
        // player.playVideo();
      },
      onStateChange: (event) => {
        domState.innerHTML = ['UNSTARTED ', 'ENDED', 'PLAYING', 'PAUSED', 'BUFFERING', 'CUED'][
          event.data + 1
        ];
      },
      onPlaybackQualityChange: (event) => {
        domQuality.innerHTML = event.data;
      },
      onPlaybackRateChange: (event) => {
        domRate.innerHTML = event.data.toString();
      },
    },
  });
};

window.onload = init;
