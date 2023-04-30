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

let onLang = 'ru';
let offLang = 'en';

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

generateDocument();
initLang();

let pressed = new Set();

document.addEventListener('keydown', function(event) {
    let keyClass = event.code.toLowerCase();
    let keyEl = document.querySelector('.' + keyClass);
    if (!keyEl.classList.contains('light')){
        keyEl.classList.add('light');
    }
    pressed.add(event.code);
    if (pressed.has('ControlLeft') && pressed.has('AltLeft')){
        changeLang();
    }
  });

  document.addEventListener('keyup', function(event) {
    let keyClass = event.code.toLowerCase();
    let keyEl = document.querySelector('.' + keyClass);
    if (keyEl.classList.contains('light')){
        keyEl.classList.remove('light');
    }
    pressed.delete(event.code);
  });