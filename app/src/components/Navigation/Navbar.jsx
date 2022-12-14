import { Navbar, Container, Nav, Button, NavDropdown } from "react-bootstrap";

const NavbarLayout = ({ setIsActive, isActive }) => {
  return (
    <>
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
          <Nav className="ms-auto">
            <NavDropdown
              title={<i className="fas fa-user"></i>}
              id="navbarScrollingDropdown"
              align={"end"}
            >
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <div className="d-flex align-items-center">
              <Button size="sm" onClick={() => setIsActive(!isActive)}>
                <i className="fas fa-bars"></i>
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarLayout;
