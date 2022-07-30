const URL = "https://starwars-server.vercel.app/movies";
  window.onload = () => {
     start ();
  }



const start = async () => {
  
    const movies = await getMovies();
    mappedMovies(movies);
}

const getMovies =  async () =>{
    const apiMovies = await fetch(URL);
    const converToJason = apiMovies.json();
     return converToJason;
} 

const mappedMovies =  (films) =>{
    films.data.movies.map((film)=>{
          paintMovies({
              nombre:film.name,
              año: film.year,
              poster: film.poster,
              sinopsis: film.crawl,
              cineastas: getFilmMakers(film.filmMakers),
             
          })
    })
} 




const getFilmMakers = (filmMakers) => {
      const filmMakerslist = [];
      filmMakers.forEach(filmMaker => {
        filmMakerslist.push(`${filmMaker.role} : ${filmMaker.name}  `);        
      });
      return filmMakerslist;
}

const paintMovies = (movie) =>{
    const mainContainer = document.querySelector("#mainContainer");
    mainContainer.innerHTML+= `
       <div>
       <img src=${movie.poster} alt = ${movie.nombre} referrerpolicy="no-referrer">
       <h2>Titulo: ${movie.nombre}</h2>  
       <p><b> Año: ${movie.año}</b></p>
       <p> <b>Sinopsis:</b> ${movie.sinopsis}</p>
       <p> <b>Creado por:</b></p> 
       <p>${movie.cineastas}</p>
       </div>
    `


}