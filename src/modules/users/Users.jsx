import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";

import { useHistory } from 'react-router'
import { Table, Button, Form, Navbar, FormControl, Container } from "react-bootstrap"
import addUser from '../users/addUser';
import editUser from '../users/editUser';



const Users = () => {
    const history= useHistory();

   const submit =(e) => {
       e.preventDefault();
       history.push('/editUser')
   }

   const adduser =(e) => {
        e.preventDefault();
        history.push('/addUser')
}


    return (
        <div className = "table container">
          <section class="content-header">
                    <h1>
                        Gestión de usuarios
                    </h1>
                    <ol class="breadcrumb">
                        <li><a href="home"><i class="fa fa-dashboard"></i> Inicio</a></li>
                    
                        <li class="active">Usuarios</li>
                    </ol>
        </section>
         
         
         
         
            <div class="box-header with-border">
               
                    <button onClick={adduser} type="button" class="btn btn-danger" >  

                        Agregar usuario
                    </button>
               
           </div>
        
           <div>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Filtro</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Container fluid>
                <Form className="d-flex">
                <FormControl
                type ="search"
                placeholder="ID Venta / DNI / Nombre del cliente"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success">Ir</Button>
                </Form>
                </Container>
                </Navbar.Collapse>
            </Navbar>
            </div>
            <table class="table table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">usuario login</th>
                    <th scope="col">Rol</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Opciones</th>

                </tr>
            </thead>
            <tbody>
               <tr>
                    <th scope="row">1</th>
                    <td>Pedro Fernandez </td>
                    <td>pefer@hotmail.com</td>
                    <td>Estudiante</td>
                    <td>Pendiente</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
                <tr>
                    <th scope="row">1</th>
                    <td>Maria Perez </td>
                    <td>maria@hotmail.com</td>
                    <td>Administrador</td>
                    <td>Autorizado</td>
                    <td><Button onClick={submit} variant="secondary">Editar</Button></td>
                </tr>
                
            </tbody>
        </table>
            
            <Switch>
                <Route exact path='/addUser' component={addUser} />
                <Route exact path='/editUser' component={editUser} />
            </Switch>
        
        </div >
    )
}

export default Users
