
export async function NewsApi(place) {
  //método y credenciales
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "1384592e58494cff998e25da406e5a96",
    },
  };

  try {
    //llamada a la api
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${place}&searchIn=title&sortBy=popularity&language=es`,
      options
    );
    const data = await response.json();
    console.log(data); //Imprimimos en consola para ver que trae

    const article = data.articles[0]; //Obtenemos el primer artículo
    const { author, title, description, urlToImage, url } = article; //Extraemos los datos que necesitamos
    console.log(author, title, description, urlToImage, url); //Imprimimos en consola para ver que trae

    //Retornamos un objeto con los datos que necesitamos
    return {
      author,
      title,
      description,
      urlToImage,
      url
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // Propaga el error para manejarlo en el componente que haga la llamada
  }
}
