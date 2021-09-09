import Congratulate from './Congratulate';
import {Button, Container, Row, Col} from 'react-bootstrap';

function Home() {
    return (
        <>
        <Container>
            <Row>
                <Col md={3}>
                <Button variant="success">Click Me!</Button>
                </Col>
                <Col md={6}>
                <Congratulate></Congratulate>
                </Col>
                <Col md={3}>
                <h1>hello</h1>
                </Col>
            </Row>
        
        </Container>
        
        </>
      );
}

export default Home;