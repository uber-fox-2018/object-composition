'use strick'

const Cookie = require('./Cookie.js');

class ChocholateChip extends Cookie {
    constructor() {
        super();
        this.choc_chip_count = 200;
    }
}

module.exports = ChocholateChip;