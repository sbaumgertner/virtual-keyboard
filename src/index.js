import keys from './js/keyboard.json' assert {type: 'json'};
import { Key } from './js/Key.js';

function generateRow (keysArray){
    let row = document.createElement('div');
    row.className = 'keyboard__row';
    for (let keyData of keysArray){
        let key =  new Key(keyData);
        row.appendChild(key.generateHTML());
    }
    return row;
}

function generateKeyboard(data){
    let keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    for (let dataRow of data){
        keyboard.appendChild(generateRow(dataRow));
    }
    return keyboard;
}

function generateDocument(){
    let wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    wrapper.innerHTML = '<h1 class="h1">Virtual keyboard</h1>' +
    '<textarea class="keyboard-input"></textarea>';
    wrapper.appendChild(generateKeyboard(keys));

    let os = document.createElement('p');
    os.className = 'os-info';
    os.innerHTML = 'Created in the Windows OS';
    wrapper.appendChild(os);

    let lang = document.createElement('p');
    lang.className = 'lang-info';
    lang.innerHTML = 'Switch language: left ctrl + alt';
    wrapper.appendChild(lang);

    document.body.appendChild(wrapper);
}

let onLang;
let offLang;
let pressed = new Set();
let mousePressed = '';
let cursorPosition = -1;

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', init);

function init(event){
    getLocalStorage();
    generateDocument();
    initLang();
    addEventListeners();
}

function setLocalStorage() {
    localStorage.setItem('lang', onLang);
}

function getLocalStorage() {
    if (localStorage.getItem('lang')) {
        onLang = localStorage.getItem('lang');
    }
    else onLang = 'en';
    onLang == 'en' ? offLang = 'ru' : offLang = 'en';
}

function initLang(){

    let onArr = document.querySelectorAll('.' + onLang);
    for (let item of onArr){
        item.classList.remove('hidden');
    }
    let offArr = document.querySelectorAll('.' + offLang);
    for (let item of offArr){
        item.classList.add('hidden');
    }
}

function changeLang(){
    let tmp = onLang;
    onLang = offLang;
    offLang = tmp;
    initLang();
}

function addEventListeners(){
    document.addEventListener('keydown', function(event) {
        let keyClass = event.code.toLowerCase();
        let keyEl = document.querySelector('.' + keyClass);
        keyEl.classList.add('light');
        pressed.add(event.code);
        if (pressed.has('ControlLeft') && pressed.has('AltLeft')){
            changeLang();
        }
        if (document.activeElement != document.querySelector('.keyboard-input')){
            addInput(keyEl);
        }
        else {
            cursorPosition += 1;
        }
      });
    
      document.addEventListener('keyup', function(event) {
        let keyClass = event.code.toLowerCase();
        let keyEl = document.querySelector('.' + keyClass);
        keyEl.classList.remove('light');
        pressed.delete(event.code);
      });
    
      document.querySelector('.keyboard').addEventListener('mousedown', function(event) {
        let keyEl = event.target.closest('.key');
        if (keyEl){
            keyEl.classList.add('light');
            pressed.add(keyEl.dataset.code);
            mousePressed = keyEl.dataset.code;
            if (pressed.has('ControlLeft') && pressed.has('AltLeft')){
                changeLang();
            }
            addInput(keyEl);
        }
      });

      document.addEventListener('mouseup', function(event) {
        if (mousePressed){
            let keyEl = document.querySelector('.' + mousePressed.toLowerCase());
            keyEl.classList.remove('light');
            pressed.delete(keyEl.dataset.code);
            mousePressed = '';
        }
      });

      document.querySelector('.keyboard-input').addEventListener('click', function(event) {
        let input = document.querySelector('.keyboard-input');
        cursorPosition = input.selectionStart;
        console.log('set pos = ' + cursorPosition);
      });
}

function addInput(keyEl){
    if (keyEl.classList.contains('special')){
        return;
    }
    let lang = keyEl.querySelector('.' + onLang);
    let shift = pressed.has('ShiftLeft') || pressed.has('ShiftRight');
    let caps = pressed.has('CapsLock');
    let key = '';
    if (!shift && !caps){
        key = lang.querySelector('.regular');
    }
    else if (shift && !caps){
        key = lang.querySelector('.shift');
    }
    else if (!shift && caps){
        key = lang.querySelector('.caps');
    }
    else {
        key = lang.querySelector('.caps-shift');
    }
    let input = document.querySelector('.keyboard-input');
    console.log(cursorPosition);

    if (cursorPosition < 0 || cursorPosition >= input.value.length){
        input.value = input.value + key.textContent;
        cursorPosition = input.value.length;
    }
    else {
        input.value = input.value.substring(0, cursorPosition) + 
        key.textContent + input.value.substring(cursorPosition);
        cursorPosition += 1;
    }
}



