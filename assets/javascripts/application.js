var html5VideoPlayer = (function() {
  'use strict';

  var videoContainer = document.querySelector('.video-container'),
  video = document.querySelector('video');

  function init() {
  }

  return {
    init: init
  }

}());

document.addEventListener('DOMContentLoaded', function(event) {
  html5VideoPlayer.init();
});
