window.addEventListener('keydown', function(keydownEvent) {
  const key = document.querySelector(`div[data-key="${keydownEvent.key}"]`);
  key.classList.add("playing");

  const sound = document.querySelector(`audio[data-key="${keydownEvent.key}"]`);
  sound.play();

  const keys = document.querySelectorAll('.key');
  keys.forEach(function (key) {
    key.addEventListener('transitionend', function (transitionendEvent) {
      if (transitionendEvent.propertyName === 'transform') {
        this.classList.remove('playing');
      }
    });
  });
});