import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";


export default function Nav(props) {

    return (
       <div>
         <NavLink to="/home">
            <button>Home</button>
         </NavLink>
         <NavLink to="/about">
            <button>About</button>
         </NavLink>
         <button onClick={props.logout}>Logout ✘</button>
          <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }

 
 //arrow(onClick={() =>) para que se ejecute cada vez que clickeamos
 // Siempre ira a Home "/" y "*" todo lo excluido es para error 404