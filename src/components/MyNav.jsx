import { Container, Navbar, Nav } from "react-bootstrap"


const MyNav = function () {
    return (
      <Navbar collapseOnSelect expand="md" bg="dark" data-bs-theme="dark">
        <Container fluid={true}>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#browse">Browse</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
  }
  export default MyNav