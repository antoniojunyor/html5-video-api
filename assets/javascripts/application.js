var html5VideoPlayer = (function() {
  'use strict';

  var videoContainer = document.querySelector('.video-container'),
  video = document.querySelector('video');

  function init() {
    togglePlayPauseVideo();
  }

  function togglePlayPauseVideo() {
    videoContainer.addEventListener('click', function() {
      if (video.paused == true) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  return {
    init: init
  }

}());

document.addEventListener('DOMContentLoaded', function(event) {
  html5VideoPlayer.init();
});
