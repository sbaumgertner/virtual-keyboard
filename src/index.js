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

let input;

window.addEventListener('beforeunload', setLocalStorage);
window.addEventListener('load', init);

function init(event){
    getLocalStorage();
    generateDocument();
    initLang();
    addEventListeners();

    input = document.querySelector('.keyboard-input');
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
        event.preventDefault();
        handleKey(keyEl);
      });
    
      document.addEventListener('keyup', function(event) {
        if (event.code != 'CapsLock'){
            let keyClass = event.code.toLowerCase();
            let keyEl = document.querySelector('.' + keyClass);
            handleKeyUp(keyEl);
        }
      });
    
      document.querySelector('.keyboard').addEventListener('mousedown', function(event) {
        let keyEl = event.target.closest('.key');
        if (keyEl){
            handleKey(keyEl);
        }
      });

      document.addEventListener('mouseup', function(event) {
        if (mousePressed){
            let keyEl = document.querySelector('.' + mousePressed.toLowerCase());
            handleKeyUp(keyEl);
            mousePressed = '';
        }
      });

      document.querySelector('.keyboard-input').addEventListener('click', function(event) {
        let input = document.querySelector('.keyboard-input');
        cursorPosition = input.selectionStart;
        console.log('set pos = ' + cursorPosition);
      });
}

function handleKeyUp(keyEl){
    if (keyEl.dataset.code != 'CapsLock'){
        keyEl.classList.remove('light');
        pressed.delete(keyEl.dataset.code);
    }
    if (keyEl.dataset.code == 'ShiftLeft' || keyEl.dataset.code == 'ShiftRight'){
        updateKeys();
    }
}

function handleKey(keyEl){
    if (keyEl.dataset.code != 'CapsLock' || !pressed.has('CapsLock')){
        keyEl.classList.add('light');
        pressed.add(keyEl.dataset.code);
        mousePressed = keyEl.dataset.code;
    }
    else {
        keyEl.classList.remove('light');
        pressed.delete(keyEl.dataset.code);
    }
    if (pressed.has('ControlLeft') && pressed.has('AltLeft')){
        changeLang();
    }
    if (keyEl.classList.contains('special')){
        handleSpecialKey(keyEl);
    }
    else {
        addInput(keyEl); 
    }
}

function addInput(keyEl){
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
    insertKeyInput(key.textContent);
}

function insertKeyInput(content) {
    if (cursorPosition < 0 || cursorPosition >= input.value.length){
        input.value = `${input.value}${content}`;
        cursorPosition = input.value.length;
    }
    else {
        let start = input.value.substring(0, cursorPosition);
        let end = input.value.substring(cursorPosition);
        input.value = `${start}${content}${end}`;
        cursorPosition += 1;
    }
    input.selectionStart = input.selectionEnd = cursorPosition;
}

function deleteKey(next){
    let pos = next ? cursorPosition : cursorPosition - 1;
    if (pos >= 0 && pos < input.value.length){
        input.value = input.value.substring(0, pos) + 
                    input.value.substring(pos + 1);
    }
    if (!next){
        cursorPosition -= 1;
    }
}

function handleSpecialKey(keyEl){
    let arrows = ['ArrowUp', 'ArrowLeft', 'ArrowRight', 'ArrowDown'];
    let code = keyEl.dataset.code;
    if (arrows.includes(code)){
        addInput(keyEl);
    }
    else if (code == 'Backspace'){
        deleteKey(false);
    }
    else if (code == 'Delete'){
        deleteKey(true);
    }
    else if (code == 'Tab'){
        insertKeyInput(`\t`);
    }
    else if (code == 'Enter'){
        insertKeyInput(`\n`);
    }
    else if (code == 'CapsLock' || code == 'ShiftLeft' || code == 'ShiftRight'){
        updateKeys();
    }
}

function updateKeys(){
    let shift = pressed.has('ShiftLeft') || pressed.has('ShiftRight');
    let caps = pressed.has('CapsLock');

    let regularKeys = document.querySelectorAll('.regular');
    let shiftKeys = document.querySelectorAll('.shift');
    let capsKeys = document.querySelectorAll('.caps');
    let capsShiftKeys = document.querySelectorAll('.caps-shift');
    if (!shift && !caps){
        switchHiddenKeys(regularKeys, false);
        switchHiddenKeys(shiftKeys, true);
        switchHiddenKeys(capsKeys, true);
        switchHiddenKeys(capsShiftKeys, true);
    }
    else if (shift && !caps){
        switchHiddenKeys(regularKeys, true);
        switchHiddenKeys(shiftKeys, false);
        switchHiddenKeys(capsKeys, true);
        switchHiddenKeys(capsShiftKeys, true);
    }
    else if (!shift && caps){
        switchHiddenKeys(regularKeys, true);
        switchHiddenKeys(shiftKeys, true);
        switchHiddenKeys(capsKeys, false);
        switchHiddenKeys(capsShiftKeys, true);
    }
    else {
        switchHiddenKeys(regularKeys, true);
        switchHiddenKeys(shiftKeys, true);
        switchHiddenKeys(capsKeys, true);
        switchHiddenKeys(capsShiftKeys, false);
    }
}

function switchHiddenKeys(keysArr, isHidden){
    for (let item of keysArr){
        isHidden ? item.classList.add('hidden') : item.classList.remove('hidden');
    }
}



