import { useState } from "react";
import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
//import characters from './data.js';
import axios from "axios";

//conectamos con la API con axios
const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff"

function App() {

   const [characters, setCharacters] = useState([]);
   //creamos la f() para agregar un nuevo personaje
   //solicitandolo a la API
   function onSearch(id) {
      //filtrar para saber que no sea repetido
      const characterId = characters.filter(
         char => char.id === Number(id)
      )
      if(characterId.length){
         return alert(`${characterId[0].name} ya existe!`)
      }
      axios(`${URL}/${id}?key=${API_KEY}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters([...characters, data]);
            } else {
               window.alert('¡No hay personajes con este ID!Elija desde el 1 al 826');
            }
         }
      );
   }
   //En nuestro character tenemos los datos y en el id el indice
   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)))
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch}/>
         <hr />
         <Cards characters={characters} onClose= {onClose}/>
      </div>
   );
}

export default App;

/*
Eliminamos el SearchBar <SearchBar onSearch={(characterID) => window.alert(characterID)} />


const onSearch = (id) => {
      setCharacters([...characters, example]);
      //estamos recibiendo un array entonces hacemos la copia
   }
*/

