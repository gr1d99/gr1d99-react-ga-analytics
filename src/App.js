import React from 'react';
import './App.css';
import {Container, Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap";
import { Link, Route, Switch } from 'react-router-dom';
import { HomePage } from './HomePage';
import { CategoryProducts } from './CategoryProducts';
import { ProductDetail } from './ProductDetail';


function App() {
  return (
      <React.Fragment>
        <React.Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand as={Link} to='/' className='navbar-brand'>Ecommerce</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link as={Link} className='nav-link' to='/'>Home</Nav.Link>
                <Nav.Link as={Link} className='nav-link' to='/categories'>Categories</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>
        <Container fluid>
          <Switch>
            <Route path='/' exact render={props => <HomePage {...props} />} />
            <Route path='/categories' exact render={props => <CategoryProducts {...props} />} />
            <Route path='/products/:sku' exact render={props => <ProductDetail {...props} />} />
          </Switch>
        </Container>
      </React.Fragment>
  );
}

export default App;
