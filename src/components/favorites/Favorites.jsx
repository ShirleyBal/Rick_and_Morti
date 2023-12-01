import { useSelector } from "react-redux";
import Card from "../card/Card.jsx";


export default function Favorites({onClose }) {
   
   const myFavorites = useSelector(state => state.myFavorites);

   return (
      <div
          style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
          }}
      >
         {
            myFavorites.map(myFavorites => (
               <Card
                  key={myFavorites.id}
                  id={myFavorites.id}
                  name={myFavorites.name}
                  status={myFavorites.status}
                  species={myFavorites.species}
                  gender={myFavorites.gender}
                  origin={myFavorites.origin.name}
                  image={myFavorites.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}