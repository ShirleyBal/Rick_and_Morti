import React from "react";

//La barra de BUSCAR
export default function SearchBar(props) {
   //* props = { onSearch: (characterID) => window.alert(characterID)}
   const [id, setId] = React.useState("") // [estado, manejador]
   const handleChange = event =>{
     const {value} = event.target;
     //lo pisamos
     setId(value);
   }

   //una f() para que elimine una vez seleccionado el personaje a traer
   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   //traer character Random
   const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomNumber)
   }

   return (
      <div>
         <input 
         type="text"
         name="search"
         id="search"
         onChange={handleChange} 
         value= {id}
         />
         <button onClick={handleClick}>Agregar</button>
         <button onClick={handleRandom}>Random</button>
      </div>
   );
}

//<button onClick={() => props.onSearch(id)}>Agregar</button> para que busque y se conecta con el padre APP
//arrow(onClick={() =>) para que se ejecute cada vez que clickeamos

/*
un personaje aleatorio
const SearchBar = () => {
  const [randomCharacter, setRandomCharacter] = useState(null);

  // Función para generar un personaje aleatorio
  const generateRandomCharacter = async () => {
    try {
      const response = await axios.get('URL_DE_TU_API_PARA_PERSONAJES_RANDOM');
      setRandomCharacter(response.data);
    } catch (error) {
      console.error('Error al obtener el personaje aleatorio:', error);
    }
  };

  return (
    <div>
      { Tu barra de búsqueda u otros elementos del componente }
      <button onClick={generateRandomCharacter}>Generar Personaje Aleatorio</button>

      { Mostrar el personaje aleatorio si está disponible }
      {randomCharacter && (
        <div>
          <h2>Personaje Aleatorio</h2>
          { Mostrar detalles del personaje }
          { Ejemplo: <p>{randomCharacter.name}</p> }
        </div>
      )}
    </div>
  );
};

export default SearchBar;


*/