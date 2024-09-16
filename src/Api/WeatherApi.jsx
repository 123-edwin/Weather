export async function WeatherApi(place) {
  //método y credenciales
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "f0d072cdaamshd0c2f62fcd5da40p19ac12jsnb1b9d21ae5b0",
      "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    //llamada a la api
    const response = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${place}`,
      options
    );
    const data = await response.json();
    console.log(data); //Imprimimos en consola para ver que trae

    //extracción de datos
    const { current, location } = data;
    const { country, name, localtime } = location;
    const {
      condition,
      temp_c,
      feelslike_c,
      is_day,
      humidity,
      wind_kph,
      wind_dir,
    } = current;
    const { text } = condition;
    //Retornamos un objeto con los datos que necesitamos
    return {
      country,
      name,
      localtime,
      temperature: temp_c,
      feelslike: feelslike_c,
      is_day,
      humidity,
      wind_speed: wind_kph,
      wind_direction: wind_dir,
      condition: text,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propaga el error para manejarlo en el componente que haga la llamada
  }
}
