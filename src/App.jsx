import { WeatherApi } from "./Api/WeatherApi.jsx";
import "./App.css";
import { useState, useEffect } from "react";
import { Navbar } from "./NavBar/NavBar.jsx";
import { temperatureInfo as Temperature } from "./Temperature/Temperature.jsx";
import { WindThings } from "./WindThings/WindThings.jsx";

function App() {
  const [data, setData] = useState(null); //Estado para guardar los datos
  const [error, setError] = useState(null); //Estado para guardar los errores
  const [place, setPlace] = useState("Colima");
  const [input, setInput] = useState("");

  useEffect(() => {
    //Función para cargar los datos
    const loadClimaData = async () => {
      try {
        //Aquí llamamos a la función que hicimos en WeatherApi.jsx
        const climaData = await WeatherApi(place);
        //Guardamos los datos en el estado
        setData(climaData);
      } catch (error) {
        //Manejo de errores
        //Guardamos el error en el estado
        setError(error);
      }
    };
    loadClimaData(); //Aquí se llama la función
  }, [place]); //[] Asegura que solo se ejecute una vez

  //Ternaria para mostrar el error
  {
    error ? <h2>{error}</h2> : null;
  }

  return (
    <>
      <Navbar input={input} setInput={setInput} setPlace={setPlace} />
      {data && (
        <>
            <div className="DataText">
              <div className="country">
                <p>{data.country}</p>
              </div>
              <div className="name">
                <p>El lugar es: {data.name}</p>
              </div>
              <div className="localtime">
                <p>{data.localtime}</p>
              </div>
            </div>
            <div className="containercards">
              <Temperature
                temperature={data.temperature}
                humidity={data.humidity}
                feelslike={data.feelslike}
                condition={data.condition}
              ></Temperature>
              <WindThings
                wind_speed={data.wind_speed}
                wind_direction={data.wind_direction}
                is_day={data.is_day}
              ></WindThings>
            </div>
        </>
      )}
    </>
  );
}

export default App;
