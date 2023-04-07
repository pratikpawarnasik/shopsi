import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import LoginForm from "./loginForm";
// import {Config} from "../config";
import UserList from "./userList";
// import Config from "../api/authApi";
class Login extends Component {
  componentDidMount(): void {
    console.log('Inside login compoint did mount--');
  }
  render() {
    
    return <Container className="p-5">
      <Row>
        <Col className="p-5 bg-info" md={{ span: 8, offset: 2 }}>
          
          <LoginForm />
          
        </Col>
      </Row>
      <div className="d-none d-sm-block">
            <UserList/>
          </div>
    </Container>;
  }
}

export default Login;
