import keys from './js/keyboard.json';// assert {type: 'json'};
import { Key } from './js/Key';

function generateRow(keysArray) {
  const row = document.createElement('div');
  row.className = 'keyboard__row';
  keysArray.forEach((keyData) => {
    const key = new Key(keyData);
    row.appendChild(key.generateHTML());
  });
  return row;
}

function generateKeyboard(data) {
  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  data.forEach((dataRow) => {
    keyboard.appendChild(generateRow(dataRow));
  });
  return keyboard;
}

function generateDocument() {
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  wrapper.innerHTML = '<h1 class="h1">Virtual keyboard</h1>'
    + '<textarea class="keyboard-input"></textarea>';
  wrapper.appendChild(generateKeyboard(keys));

  const os = document.createElement('p');
  os.className = 'os-info';
  os.innerHTML = 'Created in the Windows OS';
  wrapper.appendChild(os);

  const lang = document.createElement('p');
  lang.className = 'lang-info';
  lang.innerHTML = 'Switch language: left ctrl + alt';
  wrapper.appendChild(lang);

  document.body.appendChild(wrapper);
}

let onLang;
let offLang;
const pressed = new Set();
let mousePressed = '';
let cursorPosition = -1;

let input;

function setLocalStorage() {
  localStorage.setItem('lang', onLang);
}

function getLocalStorage() {
  if (localStorage.getItem('lang')) {
    onLang = localStorage.getItem('lang');
  } else onLang = 'en';
  offLang = (onLang === 'en') ? 'ru' : 'en';
}

function initLang() {
  const onArr = document.querySelectorAll(`.${onLang}`);
  onArr.forEach((item) => {
    item.classList.remove('hidden');
  });
  const offArr = document.querySelectorAll(`.${offLang}`);
  offArr.forEach((item) => {
    item.classList.add('hidden');
  });
}

function changeLang() {
  const tmp = onLang;
  onLang = offLang;
  offLang = tmp;
  initLang();
}

function insertKeyInput(content) {
  if (cursorPosition < 0 || cursorPosition >= input.value.length) {
    input.value = `${input.value}${content}`;
    cursorPosition = input.value.length;
  } else {
    const start = input.value.substring(0, cursorPosition);
    const end = input.value.substring(cursorPosition);
    input.value = `${start}${content}${end}`;
    cursorPosition += 1;
  }
  input.selectionStart = cursorPosition;
  input.selectionEnd = cursorPosition;
}

function addInput(keyEl) {
  const lang = keyEl.querySelector(`.${onLang}`);
  const shift = pressed.has('ShiftLeft') || pressed.has('ShiftRight');
  const caps = pressed.has('CapsLock');
  let key = '';
  if (!shift && !caps) {
    key = lang.querySelector('.regular');
  } else if (shift && !caps) {
    key = lang.querySelector('.shift');
  } else if (!shift && caps) {
    key = lang.querySelector('.caps');
  } else {
    key = lang.querySelector('.caps-shift');
  }
  insertKeyInput(key.textContent);
}

function deleteKey(next) {
  const pos = next ? cursorPosition : cursorPosition - 1;
  if (pos >= 0 && pos < input.value.length) {
    input.value = input.value.substring(0, pos)
                      + input.value.substring(pos + 1);
  }
  if (!next) {
    cursorPosition -= 1;
  }
}

function switchHiddenKeys(keysArr, isHidden) {
  keysArr.forEach((item) => {
    if (isHidden) {
      item.classList.add('hidden');
    } else {
      item.classList.remove('hidden');
    }
  });
}

function updateKeys() {
  const shift = pressed.has('ShiftLeft') || pressed.has('ShiftRight');
  const caps = pressed.has('CapsLock');

  const regularKeys = document.querySelectorAll('.regular');
  const shiftKeys = document.querySelectorAll('.shift');
  const capsKeys = document.querySelectorAll('.caps');
  const capsShiftKeys = document.querySelectorAll('.caps-shift');
  if (!shift && !caps) {
    switchHiddenKeys(regularKeys, false);
    switchHiddenKeys(shiftKeys, true);
    switchHiddenKeys(capsKeys, true);
    switchHiddenKeys(capsShiftKeys, true);
  } else if (shift && !caps) {
    switchHiddenKeys(regularKeys, true);
    switchHiddenKeys(shiftKeys, false);
    switchHiddenKeys(capsKeys, true);
    switchHiddenKeys(capsShiftKeys, true);
  } else if (!shift && caps) {
    switchHiddenKeys(regularKeys, true);
    switchHiddenKeys(shiftKeys, true);
    switchHiddenKeys(capsKeys, false);
    switchHiddenKeys(capsShiftKeys, true);
  } else {
    switchHiddenKeys(regularKeys, true);
    switchHiddenKeys(shiftKeys, true);
    switchHiddenKeys(capsKeys, true);
    switchHiddenKeys(capsShiftKeys, false);
  }
}

function handleSpecialKey(keyEl) {
  const arrows = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
  const { code } = keyEl.dataset;
  if (arrows.includes(code)) {
    addInput(keyEl);
  } else if (code === 'Backspace') {
    deleteKey(false);
  } else if (code === 'Delete') {
    deleteKey(true);
  } else if (code === 'Tab') {
    insertKeyInput('\t');
  } else if (code === 'Enter') {
    insertKeyInput('\n');
  } else if (code === 'CapsLock' || code === 'ShiftLeft' || code === 'ShiftRight') {
    updateKeys();
  }
}

function handleKey(keyEl) {
  if (keyEl.dataset.code !== 'CapsLock' || !pressed.has('CapsLock')) {
    keyEl.classList.add('light');
    pressed.add(keyEl.dataset.code);
    mousePressed = keyEl.dataset.code;
  } else {
    keyEl.classList.remove('light');
    pressed.delete(keyEl.dataset.code);
  }
  if (pressed.has('ControlLeft') && pressed.has('AltLeft')) {
    changeLang();
  }
  if (keyEl.classList.contains('special')) {
    handleSpecialKey(keyEl);
  } else {
    addInput(keyEl);
  }
}

function handleKeyUp(keyEl) {
  if (keyEl.dataset.code !== 'CapsLock') {
    keyEl.classList.remove('light');
    pressed.delete(keyEl.dataset.code);
  }
  if (keyEl.dataset.code === 'ShiftLeft' || keyEl.dataset.code === 'ShiftRight') {
    updateKeys();
  }
}

function addEventListeners() {
  document.addEventListener('keydown', (event) => {
    const keyClass = event.code.toLowerCase();
    const keyEl = document.querySelector(`.${keyClass}`);
    event.preventDefault();
    handleKey(keyEl);
  });

  document.addEventListener('keyup', (event) => {
    if (event.code !== 'CapsLock') {
      const keyClass = event.code.toLowerCase();
      const keyEl = document.querySelector(`.${keyClass}`);
      handleKeyUp(keyEl);
    }
  });

  document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
    const keyEl = event.target.closest('.key');
    if (keyEl) {
      handleKey(keyEl);
    }
  });

  document.addEventListener('mouseup', () => {
    if (mousePressed) {
      const keyEl = document.querySelector(`.${mousePressed.toLowerCase()}`);
      handleKeyUp(keyEl);
      mousePressed = '';
    }
  });

  document.querySelector('.keyboard-input').addEventListener('click', () => {
    cursorPosition = input.selectionStart;
  });
}

function init() {
  getLocalStorage();
  generateDocument();
  initLang();
  addEventListeners();

  input = document.querySelector('.keyboard-input');
}

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', init);
