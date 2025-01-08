import fantasy from "../books/fantasy.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row>
          {fantasy.map((libro) => {
            return (
              <Col xs={12} md={6} lg={4} xl={3} key={libro.asin}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img variant="top" src={libro.img} className="w-100" />
                  <Card.Body>
                    <Card.Title>{libro.title}</Card.Title>
                    <Card.Subtitle>{libro.category}</Card.Subtitle>
                    <Card.Text>{libro.price}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
export default AllTheBooks;
