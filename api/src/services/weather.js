const weathers = require("../../database/db.json");

class localeService {
  getWeather(id) {
    const data = weathers.filter(item => item.locale.id == id)

    return data;
  }
}

module.exports = new localeService();
