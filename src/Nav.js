import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavBar() {
  const [data, setData] = useState(localStorage.getItem("email"));

  return (
    <div className="nbar">
    <Navbar collapseOnSelect expand="lg" className="bg">
      <Container>
        <Navbar.Brand href="/"><span className="h-span">CodeWith</span><b>Rj</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav className="navv">
            {data !== null && data !== undefined && data !== "" ? (
              <>
                <Link className="n-link" to="/"><span>Home</span></Link>
                <Link eventKey={2}  className="n-link" to="/about"><span>About Us</span>
                  
                </Link>
                <NavDropdown title=<span className="n-link">Projects</span> id="collasible-nav-dropdown">
                  <NavDropdown.Item href="https://realestate-site-codewith-rj.netlify.app/"><span className="n-link">
                    Responsive Website</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="https://gym-site-by-codewithrj.netlify.app/"><span className="n-link">Gym Site</span></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="https://rajathanda.netlify.app/"><span className="n-link">Portfolio</span></NavDropdown.Item>
                  <NavDropdown.Item href="https://react-todo-by-rajat.netlify.app/"><span className="n-link">Todo</span></NavDropdown.Item>

                </NavDropdown>
                <Link  className="n-link" to="/contact"><span>Contact Us</span></Link>
                <Link  className="n-link" to="/login"
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}><span>Logout</span></Link>
              </>
            ) : (
              <>
                <Link  className="n-link" to="/login">Login</Link>
                <Link  className="n-link" to="/singup">SingUp</Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavBar;
