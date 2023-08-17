const init = () => {
  const origin = location.protocol + '//' + location.hostname + '/';
  const movieId = 'csrP6E9lUuY';

  const player = new YT.Player('player', {
    height: '360',
    width: '640',
    videoId: movieId,
    playerVars: {
      //各種パラメータ
      enablejsapi: 1,
      origin: origin,
      modestbranding: 1,
      fs: 0,
    },
    events: {
      onReady: () => {
        player.playVideo();
      },
    },
  });
};

window.onload = init;
