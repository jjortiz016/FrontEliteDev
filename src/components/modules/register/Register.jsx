import React from 'react';
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css';

const Register = () => {
    return (
        <>
        <div>
         <body>
             <form class="form-register">
           
              <h4>Formulario Registro</h4>
            <input class="controls" type="text" name="nombres" id="nombres" placeholder="Ingrese su nombre completo"/>
            <input class="controls" type="text" name="apellidos" id="apellidos" placeholder="Ingrese sus apellidos"/>
            <input class="controls" type="email" name="correo" id="correo" placeholder="Ingrese su correo"/>
            <input class="controls" type="password" name="correo" id="correo" placeholder="Ingrese su contraseña"/>
            <p>Estoy de acuerdo con <a href="#">Terminos y Condiciones</a></p>
            <input class="botons" type="submit" value="Registrar"/>
               <p><a href="#">¿Ya tengo Cuenta?</a></p>
               </form>
          </body>
        </div>
        </>
    )
}



export default Register

