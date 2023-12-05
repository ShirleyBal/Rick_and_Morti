import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import styles from "./Card.module.css"

export default function Card(props) {
   // console.log(props); --> es un obj {}
   //* props = { id:.., name:.., onclose: () => {}}

   //props = {id, name, status..} => character

   const dispatch =  useDispatch(); // funcion({type, payload})
   const [isFav, setIsFav] = useState(false);
   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(props.id));
      }else{
         setIsFav(true);
         dispatch(addFav(props))
      }
   } //lo agrega a la lista
   
   const myFavorites = useSelector(state => state.myFavorites);
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={styles.container}>
      
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
        
         <button onClick={() =>props.onClose(props.id)}>X</button>
            <h2>{props.name}</h2>
            <h4>Id: {props.id}</h4>
            <h4>Status: {props.status}</h4>
            <h4>Specie: {props.species}</h4>
            <h4>Gender: {props.gender}</h4>
            <h4>Origin: {props.origin}</h4>
            <Link to={`/detail/${props.id}`}>
               <img src={props.image} alt={props.name} />
            </Link>
      </div>
   );
}


//props.onClose de Cards
//se lo pasa por callback la funcion
// capturamos en la url el id <Link to={`/detail/${props.id}`}>