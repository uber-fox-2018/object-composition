'use strick'

const Cookie = require('./Cookie.js');

class PeanutButter extends Cookie {
    constructor() {
        super();
        this.peanut_count = 100;
    }
}

module.exports = PeanutButter;