import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./Detail.module.css"

const URL = "https://rickandmortyapi.com/api/character"

export default function Detail(props) {

    //hay que traer la info de los personajes
    const { id } = useParams();
    
    //importa el hook useState y crea un estado local
    const [character, setCharacter] = useState({});

    //hace un axios para traer data, recibe un obj{} lo trae con el useParams
    useEffect(() => {
        axios(`${URL}/${id}?key=`).then(
           ({ data }) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           }
        );
        return setCharacter({});
     }, [id]);

    return (
       <div className={styles.container}>
          <h1>Detail</h1>
          <h2>{character.name}</h2>
          <img src={character.image} alt= {character.name} />
          <h3>Status: {character.status}</h3>
          <h3>Species: {character.species}</h3>
          <h3>Gender: {character.gender}</h3>
          <h3>Origin: {character.origin?.name}</h3>
          <h3>Location: {character.location?.name}</h3>
       </div>
    );
}

//al apretar en la imagen trae los detalles

// el ternario ? es necesario para que no rompa si no esta, porque estamos 
//accediendo a una propiedad