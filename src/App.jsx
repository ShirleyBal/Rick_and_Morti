import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeFav } from "./redux/actions.js";
import './App.css';
import axios from "axios";
import Cards from './components/cards/Cards.jsx';
import Nav from "./components/nav/Nav.jsx";
//import characters from './data.js';
import About from "./components/about/About.jsx";
import Detail from "./components/detail/detail.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import Notfound from "./components/notfound/Notfound.jsx";
import Form from "./components/form/Form.jsx";

//buenas practicas las librerias arriba y componentes abajo

//conectamos con la API con axios
const URL = "https://rym2.up.railway.app/api/character"
const API_KEY = "henrystaff"

function App() {
   const navigate = useNavigate(); // una F(path) {redirije}
   const location = useLocation();
   const dispatch = useDispatch(); //para que la X funcione en el fav tambien

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
         });
      navigate("/home"); //para reutilizarlo y que regrese a home al agregar
   }

   //En nuestro character tenemos los datos y en el id el indice
   const onClose = id => {
      setCharacters(characters.filter(char => char.id !== Number(id)));
      dispatch(removeFav(id));
   }
   

   //Login
   const [access, setAccess] = useState(false);
   const EMAIL = 'ejemplo@gmail.com';
   const PASSWORD = '123456';
   //si todo esta bien va al home
   function login(userData) { //que se lo pasamos a Form
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         navigate('/home');
      }else{
         alert("Credenciales incorrectas");
      }
   }
   
   // Cuando se modifique access, si no se accedio no entra por url tampoco
   useEffect(() => { //si quiero entrar automatico poner /home
      !access && navigate('/');
   }, [access]);
   
   //para cerrar sesion
   function logout() {
      setAccess(false);
   }

   //Que se va a ver en App
   return (
      <div className='App'>
         {
            location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout}/>
         } 
         <Routes>
            <Route
            path="/"
            element= {<Form login={login} />}
            />
            <Route
            path="/home"
            element= {<Cards characters={characters} onClose={onClose}/>}
            />
            <Route
            path="/about"
            element= {<About/>}
            />
            <Route
            path="/detail/:id"
            element= {<Detail/>}
            />
            <Route
            path="/favorites"
            element= {<Favorites onClose={onClose}/>}
            />
            <Route
            path="*"
            element= {<Notfound/>}
            />
         </Routes>
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

<Routes>
     <Route>que es lo que se va a ver en que link</Route>
</Routes>

*/

