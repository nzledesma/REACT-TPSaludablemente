

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "../../imagenes/Login.png";
import LogoSaludableMente from "../../imagenes/LogoSaludableMente.png";
import Carrito from "../../imagenes/Carrito.png";
import Lupa from "../../imagenes/Lupa.png";

export const NavbarS = () => {
    return  (
      <Navbar bg="light" expand="lg" >
        <Container style={{ backgroundColor: "#FFF0AF", margin: 0, maxWidth: "100%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Navbar.Brand href="#home">
              <img src={LogoSaludableMente} alt="Logo" width={"240px"} height={"80px"} style={{ marginLeft: "0px", marginRight: "20px" }} />
            </Navbar.Brand>
            <div className="d-lg-none">
              <img src={Lupa} alt="Lupa" width={"40px"} height={"40px"} style={{ marginRight: "10px" }} />
              <img src={Login} alt="Login" width={"40px"} height={"40px"} style={{ marginRight: "10px" }} />
              <img src={Carrito} alt="Carrito" width={"40px"} height={"40px"} style={{ marginRight: "10px" }} />
            </div>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Quienes<br />somos</Nav.Link>
              
              <NavDropdown title="Tienda" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.4" style={{fontWeight: "bold",color: "#7F5004"}}>Generales</NavDropdown.Item>
                
                <NavDropdown.Item href="#action/3.
                1">Almacén</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Productos a granel</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Frutos secos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.
                5">Especias y condimentos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">Otros</NavDropdown.Item>


                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.7" style={{fontWeight: "bold",color: "#7F5004"}}>Especiales</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">Sin TACC</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.9">Sin sodio</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.10">Veganos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.11">Suplementos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.12">Otros</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="#link">Sucursales</Nav.Link>
              <Nav.Link href="#link">Contacto</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <div className="d-none d-lg-flex">
                <img src={Lupa} alt="Lupa" width={"40px"} height={"40px"} style={{ marginRight: "20px" }} />
                <img src={Login} alt="Login" width={"40px"} height={"40px"} style={{ marginRight: "20px" }} />
                <img src={Carrito} alt="Carrito" width={"40px"} height={"40px"} style={{ marginRight: "10px" }} />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  };
  
  export default function BasicExample() {
    return <NavbarS />;
  }
  
