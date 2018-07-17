'use strick'

class Cookie {
    constructor() {
        this.status = 'mentah';
        this.name = '';
        this.ingredients = [];
    }

    bake() {
        this.status = 'selesai dimasak';
    }
}

module.exports = Cookie;