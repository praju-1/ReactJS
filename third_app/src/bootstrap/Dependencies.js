
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button } from 'react-bootstrap';


function Dependencies() {
    return (
        <>
            <div>This is Bootsrap dependancy</div>
            <Container>
                <Row>
                    <Col>
                        <h1>Hello, Bootstrap!</h1>
                        <Button variant="primary">Click me</Button>
                        <br></br>
                        <br></br>
                        <Button variant="danger">Cancel</Button>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Dependencies

