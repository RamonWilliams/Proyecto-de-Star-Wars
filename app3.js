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
       <div class="tarjeta">       
       <img src=${movie.poster} alt = ${movie.nombre} referrerpolicy="no-referrer">      
       <div class ="info">
       <h2> ${movie.nombre}</h2>  
       <p> Año:${movie.año}</p>
       <p> Sinopsis:</P>
       <p> ${movie.sinopsis}</p>       
       <p>${movie.cineastas}</p>
       </div>
       </div>
    `


}