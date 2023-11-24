import React, { useState } from "react";
import validation from "../../utils/validation";

const banner= "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"

export default function Form(props) {
   
    const [userData, setuserData] = useState({
        email: "",
        password: "",
    })
    const [errors, setErrors] = useState({
        //si ya queremos algo predeterminado iria acá en las comillas
        //(apareceria abajo de cada uno)
        email: "",
        password: "",
    });

    //para que no se borre
    const handleChange = (event) => {
        const {name, value} = event.target;
        setuserData({ //una vez que ingresa se hace la copia
            ...userData,
            [name] : value
        }); //para que no se setee y hacerlo con el estado anterior
        setErrors(validation({
            ...userData,
            [name]: value
        }));
    }
    //para que el boton no este habilitado hasta que los campos fuesen llenados
    const handleSudmit = event => { 
        event.preventDefault();
        props.login(userData);
    }

      
    return (
        <div>
            <img
                src={banner}
                style={{width:"300px"}}
                alt=""
            />
            <form onSubmit={handleSudmit}>
                <label >Email: </label>
                <input 
                type="text" 
                key= "email" 
                name= "email" 
                value= {userData.email} 
                placeholder="ingresar email" 
                onChange={handleChange}
                />             
                <p style={{color: "red"}}>{errors.email ? errors.email : null}</p>
                <br/>

                <label >Password: </label>
                <input 
                type="password" 
                key= "password" 
                name= "password" 
                value= {userData.password} 
                placeholder="password"
                onChange={handleChange}
                />
                <p style={{color: "red"}}>{errors.password ? errors.password : null}</p>
                <hr/>

                <button 
                type="submit"
                disabled= { errors.email || errors.password }
                >Enviar</button>

            </form>
        </div>
    )
}



// console.log(validation({
//   email: "abc@d.e",
//   password: "1234567890"
// }))


//contrarestamos lo de la recarga automatica con el preventDefault()