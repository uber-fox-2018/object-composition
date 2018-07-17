const {PeanutButter, ChocolateChip, OtherCookie} = require('./cookie');

class CookieFactory {
  
  static create (options){
    let cookies = [];
    for (let i in options){
      let recipes = options[i].split(' = ');
      let cookieType = recipes[0];
      let cookie;
      if (cookieType === 'peanut butter'){
        cookie = new PeanutButter();
      } else if (cookieType === 'chocolate chip'){
        cookie = new ChocolateChip();
      } else {
        cookie = new OtherCookie(cookieType);
      }

      let ingredients = recipes[1].split(', ');
      for (let i in ingredients){
        let ingredient = ingredients[i].split(' : ');
        cookie.ingredients = {
          name : ingredient[0],
          amount : ingredient[1],
        }
      }

      cookies.push(cookie);
    }
    return cookies;
  }

  static cookieRecommendation (day, cookies){
    let recommendation = [];

    if (day === 'tuesday'){
      for (let i in cookies){
        let sugarFree = true;
        for (let j in cookies[i].ingredients){
          if (cookies[i].ingredients[j].name === 'sugar'){
            sugarFree = false;
          }
        }
        if (sugarFree){
          recommendation.push(cookies[i]);
        }
      }
    }
    return recommendation;
  }
}


module.exports = CookieFactory;