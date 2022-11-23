import { useState } from "react";

import "./styles.css";

import dayjs from "dayjs";

import Logo from "../../../public/images/logo.png";
import SelectUnit from "../../components/SelectUnit";
import imgSearch from "../../../public/images/icons/search.png";

import Card from "../../components/Card/index";

import api from "../../services/api";

function Home() {
  const [forecastCity, setForecastCity] = useState({});
  const [city, setCity] = useState([]);
  const [temperature, setTemperature] = useState("C");
  const [precipitation, setPrecipitation] = useState("mm");
  const [id, setId] = useState("");
  const [showOptions, setShowOptions] = useState(false);
  const [cities, setCities] = useState([]);

  const searchCity = (event) => {
    const value = event.target.value;
    setId(value);

    setShowOptions(true);
    api.get(`/locales`).then((response) => {
      setCities(response.data);
    });
  };

  const choiceOptions = (option) => {
    setShowOptions(false);
    setId(option.id);
    setCities([]);
    seekWeather(option);
  };

  function seekWeather(params) {
    api.get(`/weather/${params.id}`).then((response) => {
   
      
      response.data.map((item) => {
        setForecastCity(item);
        setCity(item.locale);
      });
      console.log(city);
    });
  }

  function celsiusToFahrenheit(value) {
    return value * 1.8 + 32;
  }

  function mmToInch(value) {
    return value / 25.4;
  }

  return (
    <div className="wrapper">
      <div className="Container">
        <img src={Logo} alt="Logo climatempo" />
        <h2>Busque o clima de sua cidade aqui.</h2>
        <div className="units">
          <span>Unidade de temperatura:</span>
          <SelectUnit options={["C", "F"]} onSelect={setTemperature} />
        </div>
        <div className="units">
          <span>Unidade de precipitação:</span>
          <SelectUnit options={["mm", "inch"]} onSelect={setPrecipitation} />
        </div>
        <div className="Search">
          <div className="Input">
            <input
              className="InputTxt"
              placeholder="Busque uma cidade"
              value={cities.name}
              onChange={searchCity}
              onClick={() => setShowOptions(!showOptions)}
            />
            <button
              className="SearchButton"
              onClick={() => {
                setShowOptions(false);
              }}
            >
              <img className="Img" src={imgSearch} alt="imagem da lupa" />
            </button>
          </div>

          {showOptions && (
            <ul className="Options">
              {cities.map((city) => {
                return (
                  <li
                    className="OptionsLi"
                    key={city.id}
                    onClick={() => choiceOptions(city)}
                  >
                    {city.name}
                    <hr />
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>

      <div className="NameCity">
        {city.name && city.state && (
          <p>
            Previsão para {city.name} - {city.state}
          </p>
        )}
      </div>

      {forecastCity.weather &&
        forecastCity.weather.map((data, index) => {
          return (
            <Card
              date={dayjs(data.date).format("DD/MM/YYYY")}
              temMax={
                temperature == "C"
                  ? `${data.temperature.max}°C`
                  : `${Math.round(celsiusToFahrenheit(data.temperature.max))}°F`
              }
              temMin={
                temperature == "C"
                  ? `${data.temperature.min}°C`
                  : `${Math.round(celsiusToFahrenheit(data.temperature.min))}°F`
              }
              precipitation={
                precipitation == "mm"
                  ? `${data.rain.precipitation}mm`
                  : `${mmToInch(data.rain.precipitation).toFixed(1)}inhc`
              }
              probability={`${data.rain.probability}%`}
              txt={data.text}
              key={index}
            />
          );
        })}
    </div>
  );
}
export default Home;

//temUnit={forecastCity.units.temperature}
//precUnit={forecastCity.units.precipitation}
