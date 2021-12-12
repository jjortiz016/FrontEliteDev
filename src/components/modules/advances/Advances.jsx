import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import { useHistory } from 'react-router'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"

import '../../../css/advances.css'
import { createBootstrapComponent } from 'react-bootstrap/esm/ThemeProvider';
import axios from 'axios';
import Cookies from 'universal-cookie';



const cookies = new Cookies();


const Advances = () => {
    const pulsar = ()=>{
        console.log("pulsado");
       
    }

    let btn = document.getElementById('mirar'),
        caja = document.getElementById('boton'),
        contador = 0;

    function cambio(){
        if(contador == 0){
            //caja.classList.add('azul');
            contador = 1;
        } else {
            //caja.classList.remove('azul');
            contador = 0;
        }
        console.log(contador)
    }   
    

    function enviar(){
                cookies.set('materia', "f", {path: "/"});
                alert(`MAteria: habilidades blandas`);
                window.location.href="./menu";
    }
   
    
    return (
        <div className = "table-container">
             
          <section class="content-header">
                    
                    <h1>
                        AVANCES ESTUDIANTES
                    </h1>
                
                
        </section>
         
            <table class="table table-hover">
            <thead>
                <tr>
                    <td>
                        <button class="boton">Registrar avances</button>
                    </td>
                </tr>
            </thead>
            <tbody>
               <tr >
                    <td class="contenido">
                        español
                    </td>
                    <td>
                        <form>
                               <input class="espacio-texto" type="text" />
                        </form>
                    </td>
               </tr>
               <tr >
                    <td class="contenido">
                        ingles
                    </td>
                    <td>
                        <form>
                               <input class="espacio-texto" type="text" />
                        </form>
                    </td>
               </tr>
               <tr >
                    <td class="contenido">
                        programación
                    </td>
                    <td>
                        <form>
                               <input class="espacio-texto" type="text" />
                        </form>
                    </td>
               </tr>               
                
                
            </tbody>
        </table>

        
            
            
        
        </div >
    )
}

export default Advances
