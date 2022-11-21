const localesService = require('../services/locales')

class localesController {
  get(request, response){
    const data = localesService.getLocales();

    response.send(data)
  }
}

module.exports = new localesController();
