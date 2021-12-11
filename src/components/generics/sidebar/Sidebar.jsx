
import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Login from '../../modules/login/Login';
import Home from '../../modules/home/Home'
import Users from '../../modules/users/Users'
import Projects from '../../modules/proyect/Proyect'
import Inscriptions from '../../modules/inscriptions/Inscriptions'
import Advances from '../../modules/advances/Advances'
import Register from '../../modules/register/Register'

function Sidebar() {
  const pathname = window.location.pathname;
  if (pathname === "/") {
    return <Login />
  }
   return <IsSidebar />;
}

const IsSidebar = () => {
    return (
 <Router>
    <Route render={({ location, history }) => (
        <React.Fragment>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                    if (location.pathname !== to) {
                        history.push(to);
                    }
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Inicio
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="users">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Usuarios
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="proyects">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Gestión de proyectos
                        </NavText>
                    </NavItem>

                    <NavItem eventKey="inscriptions">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Inscripciones
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="advances">
                        <NavIcon>
                            <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Avances
                        </NavText>
                    </NavItem>

                </SideNav.Nav>
            </SideNav>
            <main>  
                
               
                <Route path="/home" component={Home} />
                <Route path="/users" component={props => <Users />} />
                <Route path="/proyects" component={props => <Projects />} />
                <Route path="/inscriptions" component={props => <Inscriptions />} />
                <Route path="/advances" component={props => <Advances />} />
                <Route path="/register" component={props => <Register />} />
             
               
            </main>
        </React.Fragment>
    )}
    />
</Router>
        
    )
}

export default Sidebar