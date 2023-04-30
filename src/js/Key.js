export class Key {
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
                '<span class="caps-shift hidden">' + this.en.shift_caps + '/span>' +
            '</div>' +
            '<div class="ru hidden">' +
                '<span class="regular">ё</span>' +
                '<span class="shift">Ё</span>' +
                '<span class="caps">Ё</span>' +
                '<span class="caps-shift">ё</span>' +
            '</div>';
        return key;
    }
}