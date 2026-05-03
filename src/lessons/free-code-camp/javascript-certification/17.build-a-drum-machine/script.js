var pads = [
  { key: 'Q', name: 'Heater 1' },
  { key: 'W', name: 'Heater 2' },
  { key: 'E', name: 'Heater 3' },
  { key: 'A', name: 'Heater 4' },
  { key: 'S', name: 'Clap' },
  { key: 'D', name: 'Open-HH' },
  { key: 'Z', name: "Kick-n'-Hat" },
  { key: 'X', name: 'Kick' },
  { key: 'C', name: 'Closed-HH' }
];

var display = document.getElementById('display');
var dot = document.getElementById('dot');
var dotTimer;

function clearAllActive() {
  var all = document.querySelectorAll('.drum-pad');
  for (var j = 0; j < all.length; j++) {
    all[j].classList.remove('active');
  }
}

function trigger(key) {
  if (!document.getElementById('power-toggle').checked) return;

  var audio = document.getElementById(key);
  if (!audio) return;

  var btn = audio.parentElement;
  var pad = null;
  for (var i = 0; i < pads.length; i++) {
    if (pads[i].key === key) {
      pad = pads[i];
      break;
    }
  }
  if (!pad) return;

  audio.currentTime = 0;
  audio.play();

  display.textContent = pad.name;
  dot.classList.add('lit');
  clearAllActive();
  btn.classList.add('active');

  clearTimeout(dotTimer);
  dotTimer = setTimeout(function () {
    dot.classList.remove('lit');
    clearAllActive();
  }, 200);
}

var drumPads = document.querySelectorAll('.drum-pad');
for (var i = 0; i < drumPads.length; i++) {
  (function (btn) {
    btn.addEventListener('click', function () {
      var audio = btn.querySelector('.clip');
      if (audio) trigger(audio.id);
    });
  })(drumPads[i]);
}

document.addEventListener('keydown', function (e) {
  var k = e.key.toUpperCase();
  trigger(k);
});

/* ── Power toggle ── */
var powerToggle = document.getElementById('power-toggle');
var powerLabel  = document.getElementById('power-label');
var padBank     = document.getElementById('pad-bank');

powerToggle.addEventListener('change', function () {
  if (powerToggle.checked) {
    powerLabel.textContent = 'Power: On';
    padBank.classList.remove('powered-off');
    display.textContent = 'ready';
  } else {
    powerLabel.textContent = 'Power: Off';
    padBank.classList.add('powered-off');
    display.textContent = 'off';
  }
});

/* ── Volume slider ── */
var volumeSlider = document.getElementById('volume-slider');

volumeSlider.addEventListener('input', function () {
  var clips = document.querySelectorAll('.clip');
  for (var i = 0; i < clips.length; i++) {
    clips[i].volume = volumeSlider.value;
  }
  if (powerToggle.checked) {
    display.textContent = 'Volume: ' + Math.round(volumeSlider.value * 100);
  }
});

/* set initial volume */
(function () {
  var clips = document.querySelectorAll('.clip');
  for (var i = 0; i < clips.length; i++) {
    clips[i].volume = volumeSlider.value;
  }
})();

/* ── Bank toggle ── */
var bankToggle = document.getElementById('bank-toggle');
var bankLabel  = document.getElementById('bank-label');

var heaterKit = [
  { key: 'Q', name: 'Heater 1',    src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-1.mp3' },
  { key: 'W', name: 'Heater 2',    src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-2.mp3' },
  { key: 'E', name: 'Heater 3',    src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-3.mp3' },
  { key: 'A', name: 'Heater 4',    src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-4_1.mp3' },
  { key: 'S', name: 'Clap',        src: 'https://cdn.freecodecamp.org/curriculum/drum/Heater-6.mp3' },
  { key: 'D', name: 'Open-HH',     src: 'https://cdn.freecodecamp.org/curriculum/drum/Dsc_Oh.mp3' },
  { key: 'Z', name: "Kick-n'-Hat", src: 'https://cdn.freecodecamp.org/curriculum/drum/Kick_n_Hat.mp3' },
  { key: 'X', name: 'Kick',        src: 'https://cdn.freecodecamp.org/curriculum/drum/RP4_KICK_1.mp3' },
  { key: 'C', name: 'Closed-HH',   src: 'https://cdn.freecodecamp.org/curriculum/drum/Cev_H2.mp3' }
];

var smoothPiano = [
  { key: 'Q', name: 'Chord 1',   src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_1.mp3' },
  { key: 'W', name: 'Chord 2',   src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_2.mp3' },
  { key: 'E', name: 'Chord 3',   src: 'https://cdn.freecodecamp.org/curriculum/drum/Chord_3.mp3' },
  { key: 'A', name: 'Shaker',    src: 'https://cdn.freecodecamp.org/curriculum/drum/Give_us_a_light.mp3' },
  { key: 'S', name: 'Open-HH',   src: 'https://cdn.freecodecamp.org/curriculum/drum/Dry_Ohh.mp3' },
  { key: 'D', name: 'Closed-HH', src: 'https://cdn.freecodecamp.org/curriculum/drum/Bld_H1.mp3' },
  { key: 'Z', name: 'Punchy Kick',src: 'https://cdn.freecodecamp.org/curriculum/drum/punchy_kick_1.mp3' },
  { key: 'X', name: 'Side Stick', src: 'https://cdn.freecodecamp.org/curriculum/drum/side_stick_1.mp3' },
  { key: 'C', name: 'Snare',      src: 'https://cdn.freecodecamp.org/curriculum/drum/Brk_Snr.mp3' }
];

function loadBank(bank) {
  pads = bank;
  for (var i = 0; i < bank.length; i++) {
    var audio = document.getElementById(bank[i].key);
    var label = audio.parentElement.querySelector('.pad-label');
    audio.src = bank[i].src;
    label.textContent = bank[i].name;
  }
}

bankToggle.addEventListener('change', function () {
  if (bankToggle.checked) {
    bankLabel.textContent = 'Bank: Heater Kit';
    loadBank(heaterKit);
  } else {
    bankLabel.textContent = 'Bank: Smooth Piano';
    loadBank(smoothPiano);
  }
  if (powerToggle.checked) display.textContent = bankLabel.textContent;
});
