const locales = require('../../database/locales.json')


class localeService{
  getLocales(){
    return locales
  }
}

module.exports = new localeService();
