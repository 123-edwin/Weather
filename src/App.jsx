import { WeatherApi } from "./Api/WeatherApi.jsx";
import { NewsApi } from "./Api/NewsApi.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./NavBar/NavBar.jsx";
import { temperatureInfo as Temperature } from "./Temperature/Temperature.jsx";
import { WindThings } from "./WindThings/WindThings.jsx";
import { NewsCard } from "./News/NewsCard.jsx";

function App() {
  const [weatherData, setweatherData] = useState(null); //Estado para guardar los datos de clima
  const [newsData, setnewsData] = useState(null); //Estado para guardar los datos de noticias
  const [errorNews, seterrorNews] = useState(null); //Estado para guardar el errWeather de noticias
  const [errorWeather, seterrorWeather] = useState(null); //Estado para guardar los errWeatheres de clima
  const [place, setPlace] = useState("Colima");
  const [input, setInput] = useState("");

  useEffect(() => {
    //Función para cargar los datos
    const loadData = async () => {
      try {
        //Aquí llamamos a la función que hicimos en WeatherApi.jsx
        const clima = await WeatherApi(place);
        //Guardamos los datos en el estado
        setweatherData(clima);
      } catch (error) {
        //Manejo de errWeatheres
        //Guardamos el errWeather en el estado
        seterrorWeather(error.message);
      }
      try {
        //Aquí llamamos a la función que hicimos en NewsApi.jsx
        const noticias = await NewsApi(place);
        //Guardamos los datos en el estado
        setnewsData(noticias);
      } catch (error) {
        //Manejo de errWeatheres
        //Guardamos el errWeather en el estado
        seterrorNews(error.message);
      }
    };
    loadData(); //Aquí se llama la función
  }, [place]); //[] Asegura que solo se ejecute una vez

  //Ternaria para mostrar el errorWeather y errorNews

  return (
    <>
      <Navbar input={input} setInput={setInput} setPlace={setPlace} />

      {errorWeather ? <h2>{errorWeather}</h2> : null}
      {weatherData && (
          <div className="DataText">
            <div className="country">
              <p>{weatherData.country}</p>
            </div>
            <div className="name">
              <p>El lugar es: {weatherData.name}</p>
            </div>
            <div className="localtime">
              <p>{weatherData.localtime}</p>
            </div>
          </div>
      )}
      <div className="mainContainer">
      {errorNews ? <h2>{errorNews}</h2> : null}
        {newsData && (
          <div className="containerNews">
            <NewsCard newsData={newsData} />
          </div>
        )}
        
        {weatherData && (
          <div className="containerCards">
            <Temperature
              temperature={weatherData.temperature}
              humidity={weatherData.humidity}
              feelslike={weatherData.feelslike}
              condition={weatherData.condition}
            ></Temperature>
            <WindThings
              wind_speed={weatherData.wind_speed}
              wind_direction={weatherData.wind_direction}
              is_day={weatherData.is_day}
            ></WindThings>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
