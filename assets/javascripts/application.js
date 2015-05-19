var html5VideoPlayer = (function() {
  'use strict';

  var videoContainer = document.querySelector('.video-container'),
  video = document.querySelector('video'),
  timer = document.querySelector('.duration');

  function init() {
    togglePlayPauseVideo();
    timerVideo();
  }

  function togglePlayPauseVideo() {
    videoContainer.addEventListener('click', function() {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  function timerVideo() {
    video.addEventListener('timeupdate', function() {
      var seconds = parseInt(video.currentTime % 60);
      var minutes = parseInt((video.currentTime / 60) % 60);

      seconds = ('0' + seconds).slice(-2);
      minutes = ('0' + minutes).slice(-2);

      timer.innerHTML = minutes + ':' + seconds;
    });
  }

  return {
    init: init
  }

}());

document.addEventListener('DOMContentLoaded', function(event) {
  html5VideoPlayer.init();
});
