import { Container, Row, Col } from 'react-bootstrap';
import './MyFooter.css';

const MyFooter = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <Container fluid={true}>
        <Row>
          <Col md={3}>
            <a href="#contatti">Contatti</a>
          </Col>
          <Col md={3}>
            <a href="#social">Social</a>
          </Col>
          <Col md={3}>
            <a href="#iscriviti">Newsletter</a>
          </Col>
          <Col md={3}>
            <p>&copy;Epibooks, 2025</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;