'use strick'

const Cookie = require('./Cookie.js');

class OtherChookie extends Cookie {
    constructor() {
        super();
        this.other_count = 150;
    }
}

module.exports = OtherChookie;