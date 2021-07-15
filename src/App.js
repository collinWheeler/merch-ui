import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          Logo
        </Col>
          <Col>
              Search Bar
          </Col>
          <Col>
              Login
          </Col>
      </Row>
    </Container>
  );
}

export default App;
