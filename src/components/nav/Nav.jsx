import SearchBar from "../searchbar/SearchBar";


export default function Nav(props) {

    return (
       <div>
          <SearchBar onSearch={props.onSearch} />
       </div>
    );
 }

 
 //arrow(onClick={() =>) para que se ejecute cada vez que clickeamos
 