"use strict"
const fs = require('fs');
const options = './cookies.txt';

class Cookie {
    constructor(name) {
        this.name = name;
        this.status = 'mentah';
        this.ingredients = [];
    }

    bake() {
        this.status = 'selesai dimasak';
    }
}

class PeanutButter extends Cookie {
    constructor(name) {
        super(name)
        this.peanut_count = 100;
    }
}

class ChocolateChip extends Cookie {
    constructor(name) {
        super(name)
        this.choc_chip_count = 200;
    }
}

class OtherCookie extends Cookie {
    constructor(name) {
        super(name)
        this.other_count = 150;
    }
}

class CookieFactory {
    static create(options) {
        let output = [];
        let cookiesList = fs.readFileSync('cookies.txt', 'utf8').split('\n');

        for (let i = 0; i < cookiesList.length; i++) {
            let cookiesName = cookiesList[i];
            if (cookiesName === 'peanut butter') {
                var cookies = new PeanutButter(cookiesName);
            } else if (cookiesName === 'chocolate chip') {
                var cookies = new ChocolateChip(cookiesName);
            } else {
                var cookies = new OtherCookie(cookiesName)
            }
            output.push(cookies);
        }
        return output;
    }
}

let bactch_of_cookies = CookieFactory.create(options);
console.log(bactch_of_cookies);