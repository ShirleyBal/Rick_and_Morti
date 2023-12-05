import { NavLink } from "react-router-dom";


export default function Notfound(props) {

    return (
       <div>
            <h1>Error 404 - Página no encontrada</h1>
            <img src="C:\Users\shiir\Desktop\Rick_and_Morti\src\components\notfound\error 404.jpg" alt="Error 404" />
            <p>La página que estás buscando no existe.</p>
            {/* Agregar un enlace a la página de inicio u otra página */}
            <NavLink to="/home">Ir a la página de inicio</NavLink>
       </div>
    );
}

 