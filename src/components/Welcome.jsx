import { Container, Row, Col, Alert } from "react-bootstrap";

const Welcome = () => {
    return (
        <Container className="border-5 mx-auto mt-3">
            <Row className="bg-warning border-5 justify-content-center rounded-4">
                <Col md={9}>
                    <div>
                        <h1>Weather App</h1>
                    </div>
                    <Alert variant="warning">
                        Check the weather of some major cities in the world
                    </Alert>
                </Col>
            </Row>
        </Container>
    )
}

export default Welcome