import Card from '../card/Card';

export default function Cards({ characters, onClose }) {
   // console.log(characters);
   //* props = { characters: [ --- ] }
   //* characters = [ {R}, {M}, {B}, {S} ] array con personajes

   //invocamos para cada personaje un card
   return (
      <div
          style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly",
          }}
      >
         {
            characters.map(character => (
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                  onClose={onClose}
               />
            ))
         }
      </div>
   );
}

//Para que no rompa tiene que tener siempre una --> Key <-- para reconocer los personajes