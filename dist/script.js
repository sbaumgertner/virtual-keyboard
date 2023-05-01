/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Key.js":
/*!***********************!*\
  !*** ./src/js/Key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
class Key {
    constructor (src){
        this.keyCode = src.keyCode;
        this.code = src.code;
        this.en = src.en;
        this.ru = src.ru;
        this.special = src.special;
    }

    generateHTML() {
        let key = document.createElement('div');
        key.className = 'key' + (this.special ? ' special' : '')  + ' ' + this.code.toLowerCase();
        key.setAttribute('data-code', this.code);

        key.innerHTML = '<div class="en">' +
                '<span class="regular">' + this.en.key + '</span>' +
                '<span class="shift hidden">' + this.en.shift + '</span>' +
                '<span class="caps hidden">' + this.en.caps + '</span>' +
                '<span class="caps-shift hidden">' + this.en.shift_caps + '</span>' +
            '</div>' +
            '<div class="ru hidden">' +
                '<span class="regular">' + this.ru.key + '</span>' +
                '<span class="shift hidden">' + this.ru.shift + '</span>' +
                '<span class="caps hidden">' + this.ru.caps + '</span>' +
                '<span class="caps-shift hidden">' + this.ru.shift_caps + '</span>' +
            '</div>';
        return key;
    }
}

/***/ }),

/***/ "./src/js/keyboard.json":
/*!******************************!*\
  !*** ./src/js/keyboard.json ***!
  \******************************/
/***/ ((module) => {

module.exports = JSON.parse('[[{"keyCode":192,"code":"Backquote","special":false,"en":{"key":"`","shift":"~","caps":"`","shift_caps":"~"},"ru":{"key":"ё","shift":"Ё","caps":"Ё","shift_caps":"ё"}},{"keyCode":49,"code":"Digit1","special":false,"en":{"key":"1","shift":"!","caps":"1","shift_caps":"!"},"ru":{"key":"1","shift":"!","caps":"1","shift_caps":"!"}},{"keyCode":50,"code":"Digit2","special":false,"en":{"key":"2","shift":"@","caps":"2","shift_caps":"@"},"ru":{"key":"2","shift":"\\"","caps":"2","shift_caps":"\\""}},{"keyCode":51,"code":"Digit3","special":false,"en":{"key":"3","shift":"#","caps":"3","shift_caps":"#"},"ru":{"key":"3","shift":"#","caps":"3","shift_caps":"#"}},{"keyCode":52,"code":"Digit4","special":false,"en":{"key":"4","shift":"$","caps":"4","shift_caps":"$"},"ru":{"key":"4","shift":";","caps":"4","shift_caps":";"}},{"keyCode":53,"code":"Digit5","special":false,"en":{"key":"5","shift":"%","caps":"5","shift_caps":"%"},"ru":{"key":"5","shift":"%","caps":"5","shift_caps":"%"}},{"keyCode":54,"code":"Digit6","special":false,"en":{"key":"6","shift":"^","caps":"6","shift_caps":"^"},"ru":{"key":"6","shift":":","caps":"6","shift_caps":":"}},{"keyCode":55,"code":"Digit7","special":false,"en":{"key":"7","shift":"&","caps":"7","shift_caps":"&"},"ru":{"key":"7","shift":"?","caps":"7","shift_caps":"?"}},{"keyCode":56,"code":"Digit8","special":false,"en":{"key":"8","shift":"*","caps":"8","shift_caps":"*"},"ru":{"key":"8","shift":"*","caps":"8","shift_caps":"*"}},{"keyCode":57,"code":"Digit9","special":false,"en":{"key":"9","shift":"(","caps":"9","shift_caps":"("},"ru":{"key":"9","shift":"(","caps":"9","shift_caps":"("}},{"keyCode":48,"code":"Digit0","special":false,"en":{"key":"0","shift":")","caps":"0","shift_caps":")"},"ru":{"key":"0","shift":")","caps":"0","shift_caps":")"}},{"keyCode":189,"code":"Minus","special":false,"en":{"key":"-","shift":"_","caps":"-","shift_caps":"_"},"ru":{"key":"-","shift":"_","caps":"-","shift_caps":"_"}},{"keyCode":187,"code":"Equal","special":false,"en":{"key":"=","shift":"+","caps":"=","shift_caps":"+"},"ru":{"key":"=","shift":"+","caps":"=","shift_caps":"+"}},{"keyCode":8,"code":"Backspace","special":true,"en":{"key":"Backspace","shift":"Backspace","caps":"Backspace","shift_caps":"Backspace"},"ru":{"key":"Backspace","shift":"Backspace","caps":"Backspace","shift_caps":"Backspace"}}],[{"keyCode":9,"code":"Tab","special":true,"en":{"key":"Tab","shift":"Tab","caps":"Tab","shift_caps":"Tab"},"ru":{"key":"Tab","shift":"Tab","caps":"Tab","shift_caps":"Tab"}},{"keyCode":81,"code":"KeyQ","special":false,"en":{"key":"q","shift":"Q","caps":"Q","shift_caps":"q"},"ru":{"key":"й","shift":"Й","caps":"Й","shift_caps":"й"}},{"keyCode":87,"code":"KeyW","special":false,"en":{"key":"w","shift":"W","caps":"W","shift_caps":"w"},"ru":{"key":"ц","shift":"Ц","caps":"Ц","shift_caps":"ц"}},{"keyCode":69,"code":"KeyE","special":false,"en":{"key":"e","shift":"E","caps":"E","shift_caps":"e"},"ru":{"key":"у","shift":"У","caps":"У","shift_caps":"у"}},{"keyCode":82,"code":"KeyR","special":false,"en":{"key":"r","shift":"R","caps":"R","shift_caps":"r"},"ru":{"key":"к","shift":"К","caps":"К","shift_caps":"к"}},{"keyCode":84,"code":"KeyT","special":false,"en":{"key":"t","shift":"T","caps":"T","shift_caps":"t"},"ru":{"key":"е","shift":"Е","caps":"Е","shift_caps":"е"}},{"keyCode":89,"code":"KeyY","special":false,"en":{"key":"y","shift":"Y","caps":"Y","shift_caps":"y"},"ru":{"key":"н","shift":"Н","caps":"Н","shift_caps":"н"}},{"keyCode":85,"code":"KeyU","special":false,"en":{"key":"u","shift":"U","caps":"U","shift_caps":"u"},"ru":{"key":"г","shift":"Г","caps":"Г","shift_caps":"г"}},{"keyCode":73,"code":"KeyI","special":false,"en":{"key":"i","shift":"I","caps":"I","shift_caps":"i"},"ru":{"key":"ш","shift":"Ш","caps":"Ш","shift_caps":"ш"}},{"keyCode":79,"code":"KeyO","special":false,"en":{"key":"o","shift":"O","caps":"O","shift_caps":"o"},"ru":{"key":"щ","shift":"Щ","caps":"Щ","shift_caps":"щ"}},{"keyCode":80,"code":"KeyP","special":false,"en":{"key":"p","shift":"P","caps":"P","shift_caps":"p"},"ru":{"key":"з","shift":"З","caps":"З","shift_caps":"з"}},{"keyCode":219,"code":"BracketLeft","special":false,"en":{"key":"[","shift":"{","caps":"[","shift_caps":"{"},"ru":{"key":"х","shift":"Х","caps":"Х","shift_caps":"х"}},{"keyCode":221,"code":"BracketRight","special":false,"en":{"key":"]","shift":"}","caps":"]","shift_caps":"}"},"ru":{"key":"ъ","shift":"Ъ","caps":"Ъ","shift_caps":"ъ"}},{"keyCode":220,"code":"Backslash","special":false,"en":{"key":"\\\\","shift":"|","caps":"\\\\","shift_caps":"|"},"ru":{"key":"\\\\","shift":"/","caps":"\\\\","shift_caps":"/"}},{"keyCode":46,"code":"Delete","special":true,"en":{"key":"Del","shift":"Del","caps":"Del","shift_caps":"Del"},"ru":{"key":"Del","shift":"Del","caps":"Del","shift_caps":"Del"}}],[{"keyCode":20,"code":"CapsLock","special":true,"en":{"key":"CapsLock","shift":"CapsLock","caps":"CapsLock","shift_caps":"CapsLock"},"ru":{"key":"CapsLock","shift":"CapsLock","caps":"CapsLock","shift_caps":"CapsLock"}},{"keyCode":65,"code":"KeyA","special":false,"en":{"key":"a","shift":"A","caps":"A","shift_caps":"a"},"ru":{"key":"ф","shift":"Ф","caps":"Ф","shift_caps":"ф"}},{"keyCode":83,"code":"KeyS","special":false,"en":{"key":"s","shift":"S","caps":"S","shift_caps":"s"},"ru":{"key":"ы","shift":"Ы","caps":"Ы","shift_caps":"ы"}},{"keyCode":68,"code":"KeyD","special":false,"en":{"key":"d","shift":"D","caps":"D","shift_caps":"d"},"ru":{"key":"в","shift":"В","caps":"В","shift_caps":"в"}},{"keyCode":70,"code":"KeyF","special":false,"en":{"key":"f","shift":"F","caps":"F","shift_caps":"f"},"ru":{"key":"а","shift":"А","caps":"А","shift_caps":"а"}},{"keyCode":71,"code":"KeyG","special":false,"en":{"key":"g","shift":"G","caps":"G","shift_caps":"g"},"ru":{"key":"п","shift":"П","caps":"П","shift_caps":"п"}},{"keyCode":72,"code":"KeyH","special":false,"en":{"key":"h","shift":"H","caps":"H","shift_caps":"h"},"ru":{"key":"р","shift":"Р","caps":"Р","shift_caps":"р"}},{"keyCode":74,"code":"KeyJ","special":false,"en":{"key":"j","shift":"J","caps":"J","shift_caps":"j"},"ru":{"key":"о","shift":"О","caps":"О","shift_caps":"о"}},{"keyCode":75,"code":"KeyK","special":false,"en":{"key":"k","shift":"K","caps":"K","shift_caps":"k"},"ru":{"key":"л","shift":"Л","caps":"Л","shift_caps":"л"}},{"keyCode":76,"code":"KeyL","special":false,"en":{"key":"l","shift":"L","caps":"L","shift_caps":"l"},"ru":{"key":"д","shift":"Д","caps":"Д","shift_caps":"д"}},{"keyCode":186,"code":"Semicolon","special":false,"en":{"key":";","shift":":","caps":";","shift_caps":":"},"ru":{"key":"ж","shift":"Ж","caps":"Ж","shift_caps":"ж"}},{"keyCode":222,"code":"Quote","special":false,"en":{"key":"\'","shift":"\\"","caps":"\'","shift_caps":"\\""},"ru":{"key":"э","shift":"Э","caps":"Э","shift_caps":"э"}},{"keyCode":13,"code":"Enter","special":true,"en":{"key":"Enter","shift":"Enter","caps":"Enter","shift_caps":"Enter"},"ru":{"key":"Enter","shift":"Enter","caps":"Enter","shift_caps":"Enter"}}],[{"keyCode":16,"code":"ShiftLeft","special":true,"en":{"key":"Shift","shift":"Shift","caps":"Shift","shift_caps":"Shift"},"ru":{"key":"Shift","shift":"Shift","caps":"Shift","shift_caps":"Shift"}},{"keyCode":90,"code":"KeyZ","special":false,"en":{"key":"z","shift":"Z","caps":"Z","shift_caps":"z"},"ru":{"key":"я","shift":"Я","caps":"Я","shift_caps":"я"}},{"keyCode":88,"code":"KeyX","special":false,"en":{"key":"x","shift":"X","caps":"X","shift_caps":"x"},"ru":{"key":"ч","shift":"Ч","caps":"Ч","shift_caps":"ч"}},{"keyCode":67,"code":"KeyC","special":false,"en":{"key":"c","shift":"C","caps":"C","shift_caps":"c"},"ru":{"key":"с","shift":"С","caps":"С","shift_caps":"с"}},{"keyCode":86,"code":"KeyV","special":false,"en":{"key":"v","shift":"V","caps":"V","shift_caps":"v"},"ru":{"key":"м","shift":"М","caps":"М","shift_caps":"м"}},{"keyCode":66,"code":"KeyB","special":false,"en":{"key":"b","shift":"B","caps":"B","shift_caps":"b"},"ru":{"key":"и","shift":"И","caps":"И","shift_caps":"и"}},{"keyCode":78,"code":"KeyN","special":false,"en":{"key":"n","shift":"N","caps":"N","shift_caps":"n"},"ru":{"key":"т","shift":"Т","caps":"Т","shift_caps":"т"}},{"keyCode":77,"code":"KeyM","special":false,"en":{"key":"m","shift":"M","caps":"M","shift_caps":"m"},"ru":{"key":"ь","shift":"Ь","caps":"Ь","shift_caps":"ь"}},{"keyCode":188,"code":"Comma","special":false,"en":{"key":",","shift":"<","caps":",","shift_caps":"<"},"ru":{"key":"б","shift":"Б","caps":"Б","shift_caps":"б"}},{"keyCode":190,"code":"Period","special":false,"en":{"key":".","shift":">","caps":".","shift_caps":">"},"ru":{"key":"ю","shift":"Ю","caps":"Ю","shift_caps":"ю"}},{"keyCode":191,"code":"Slash","special":false,"en":{"key":"/","shift":"?","caps":"/","shift_caps":"?"},"ru":{"key":".","shift":",","caps":".","shift_caps":","}},{"keyCode":38,"code":"ArrowUp","special":true,"en":{"key":"▲","shift":"▲","caps":"▲","shift_caps":"▲"},"ru":{"key":"▲","shift":"▲","caps":"▲","shift_caps":"▲"}},{"keyCode":16,"code":"ShiftRight","special":true,"en":{"key":"Shift","shift":"Shift","caps":"Shift","shift_caps":"Shift"},"ru":{"key":"Shift","shift":"Shift","caps":"Shift","shift_caps":"Shift"}}],[{"keyCode":17,"code":"ControlLeft","special":true,"en":{"key":"Ctrl","shift":"Ctrl","caps":"Ctrl","shift_caps":"Ctrl"},"ru":{"key":"Ctrl","shift":"Ctrl","caps":"Ctrl","shift_caps":"Ctrl"}},{"keyCode":91,"code":"MetaLeft","special":true,"en":{"key":"Win","shift":"Win","caps":"Win","shift_caps":"Win"},"ru":{"key":"Win","shift":"Win","caps":"Win","shift_caps":"Win"}},{"keyCode":18,"code":"AltLeft","special":true,"en":{"key":"Alt","shift":"Alt","caps":"Alt","shift_caps":"Alt"},"ru":{"key":"Alt","shift":"Alt","caps":"Alt","shift_caps":"Alt"}},{"keyCode":32,"code":"Space","special":false,"en":{"key":" ","shift":" ","caps":" ","shift_caps":" "},"ru":{"key":" ","shift":" ","caps":" ","shift_caps":" "}},{"keyCode":18,"code":"AltRight","special":true,"en":{"key":"Alt","shift":"Alt","caps":"Alt","shift_caps":"Alt"},"ru":{"key":"Alt","shift":"Alt","caps":"Alt","shift_caps":"Alt"}},{"keyCode":37,"code":"ArrowLeft","special":true,"en":{"key":"◄","shift":"◄","caps":"◄","shift_caps":"◄"},"ru":{"key":"◄","shift":"◄","caps":"◄","shift_caps":"◄"}},{"keyCode":40,"code":"ArrowDown","special":true,"en":{"key":"▼","shift":"▼","caps":"▼","shift_caps":"▼"},"ru":{"key":"▼","shift":"▼","caps":"▼","shift_caps":"▼"}},{"keyCode":39,"code":"ArrowRight","special":true,"en":{"key":"►","shift":"►","caps":"►","shift_caps":"►"},"ru":{"key":"►","shift":"►","caps":"►","shift_caps":"►"}},{"keyCode":17,"code":"ControlRight","special":true,"en":{"key":"Ctrl","shift":"Ctrl","caps":"Ctrl","shift_caps":"Ctrl"},"ru":{"key":"Ctrl","shift":"Ctrl","caps":"Ctrl","shift_caps":"Ctrl"}}]]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_keyboard_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/keyboard.json */ "./src/js/keyboard.json");
/* harmony import */ var _js_Key_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Key.js */ "./src/js/Key.js");



function generateRow (keysArray){
    let row = document.createElement('div');
    row.className = 'keyboard__row';
    for (let keyData of keysArray){
        let key =  new _js_Key_js__WEBPACK_IMPORTED_MODULE_1__.Key(keyData);
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
    wrapper.appendChild(generateKeyboard(_js_keyboard_json__WEBPACK_IMPORTED_MODULE_0__));

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




})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map