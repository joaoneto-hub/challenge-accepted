const weatherService = require('../services/weather')

class weaterController{
  get(request, response){

    const id  = request.params.id
    const data = weatherService.getWeather(id);


    // if (!data) {
    //   return response.status(404).send({ message: "Not found" });
    // }

    return response.send(data)
  }
}

module.exports = new weaterController();
