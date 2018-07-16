const {PeanutButter, ChocolateChip, OtherCookie} = require('./cookie');

class CookieFactory {
  
  static create (options){
    let cookies = [];
    for (let i in options){
      let cookie;
      if (options[i] === 'peanut butter'){
        cookie = new PeanutButter();
      } else if (options[i] === 'chocolate chip'){
        cookie = new ChocolateChip();
      } else {
        cookie = new OtherCookie(options[i]);
      }
      cookies.push(cookie)
    }
    return cookies;
  }
}


module.exports = CookieFactory;