/*https://starwars-server.vercel.app/
-Una vista en html para los personajes, otra para las peliculas y si quieres ya algo guay hazle un home tambien
-Asi tiene 3 vistas, aunque el home no tenga nada de llamadas. Es decir, 3 htmls y dos de ellos tienen sus js 
con llamadas.
-Importante, ponle a las etiquetas de imagen esto: <img src="https://example.com/images/myimage.jpg" 
alt="Some image" referrerpolicy="no-referrer">
-El atributo referrerpolicy con el no referrer tal cual para que se te pinten en tu pagina porque mi servidor es privado 
y si no no se te ven pero el src y el alt serian el name y la foto que recuperes 😄*/

const URL = "https://starwars-server.vercel.app/characters";


window.onload = () =>{
    start();
}

const start = async  () => {
    const characters =  await getCharacters();
    mappedCharacters(characters);
}

const getCharacters = async () =>{             
    
    const Api = await fetch (`${URL}`);
    convertTojson =  Api.json();
     return convertTojson   ;
}

const mappedCharacters = (characters) =>{
      characters.data.characters.map((character)=>{
      return printCharacters({
         
          origen: character.origin,
          roll: character.role,
          id: character.name,
          imagen: character.image,

      })
      })
}

const printCharacters = (character) =>{
    const mainContainer = document.querySelector("#mainContainer");
    mainContainer.innerHTML  += `
      <div class ="tarjeta "> 
        <img src =${character.imagen} alt=${character.nombre} referrerpolicy="no-referrer"/>
        <h3><b>${character.id} </b></h3>        
        <p> <b> Origen:</b> ${character.origen}</p>
        <p> <b> Roll:</b> ${character.roll} </p>
        
      </div>
    `
}




