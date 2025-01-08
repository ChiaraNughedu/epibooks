import fantasy from "../books/fantasy.json";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Component } from "react";

class AllTheBooks extends Component {
  render() {
    return (
      <Container fluid={true}>
        <Row className="mx-auto">
          {fantasy.map((libro) => {
            return (
              <Col xs={12} md={4} lg={2} xl={2} key={libro.asin}>
                <Card className="d-flex h-100" style={{ width: "13rem" }}>
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
