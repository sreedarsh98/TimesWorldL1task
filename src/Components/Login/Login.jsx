import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';
import { FaGoogle, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import './Login.css';
import loginimg from "../../assets/login.png"

const Login = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center bg-white">
      <Row className="w-100 login-container">
        <Col md={6} className="sign-left">
          <h4 className="head-sign">Sign In</h4>
          <p className="new-user">
            New user? <span className="create-link">Create an account</span>
          </p>

          <Form>
            <Form.Group controlId="username" className="mb-3">
              <Form.Control type="text" placeholder="Username or email" className="input-box" />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Control type="password" placeholder="Password" className="input-box" />
            </Form.Group> 

            <Form.Check type="checkbox" label="Keep me signed in" className="mb-3" />

            <Button variant="dark" className="w-100 submit-btn mb-3">
              Sign In
            </Button>

            <div className="text-center mb-3 text-muted or-line">
              <hr />
              <span className="or-text">Or Sign In With</span>
            </div>

            <div className="social-icons d-flex justify-content-between mt-3">
              <span className="social-circle"><FaGoogle /></span>
              <span className="social-circle"><FaFacebookF /></span>
              <span className="social-circle"><FaLinkedinIn /></span>
              <span className="social-circle"><FaTwitter /></span>
            </div>
          </Form>
        </Col>

        {/* Right Side (Image/Illustration) */}
        <Col md={6} className="d-none d-md-flex align-items-center justify-content-center">
          <img
            src={loginimg} // replace with your image path
            alt="login-illustration"
            className="img-fluid login-img"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
