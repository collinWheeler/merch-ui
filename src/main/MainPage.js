import React from 'react';
import PropTypes from 'prop-types';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';

class MainPage extends React.Component {
    static propTypes = {

    };

    state = {

    };

    render(){
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
}

export default MainPage;