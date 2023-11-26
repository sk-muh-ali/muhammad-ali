var typed = new Typed('.multiple', {
  strings: [
    'Frontend Developer',
    'Youtuber',
    'Gamer',
  ],
  stringsElement: null,
  typeSpeed: 100,
  startDelay: 100,
  backSpeed: 100,
  smartBackspace: true,
  shuffle: false,
  backDelay: 700,
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,
  loop: true,
  loopCount: Infinity,
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,
  attr: null,
  bindInputFocusEvents: false,
  contentType: 'html',
  onBegin: (self) => { },
  onComplete: (self) => { },
  preStringTyped: (arrayPos, self) => { },
  onStringTyped: (arrayPos, self) => { },
  onLastStringBackspaced: (self) => { },
  onTypingPaused: (arrayPos, self) => { },
  onTypingResumed: (arrayPos, self) => { },
  onReset: (self) => { },
  onStop: (arrayPos, self) => { },
  onStart: (arrayPos, self) => { },
  onDestroy: (self) => { },
});