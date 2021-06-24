import React, { Component } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import User from './User';
import '../css/Login.css'

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errMessage: '',
    };
  }

  click = async () => {
    let result = await User.login(this.state.email, this.state.password);
    if (true === result) {
      this.props.history.push({ pathname: 'home' });
    } else {
      console.log('メールアドレスかパスワードが違います');
      this.setState({ errMessage: 'メールアドレスかパスワードが違います' });
    }
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <Container className="center login__form_container">
        <div className="login__form_block">
          <Form>
            {this.state.errMessage && (
              <Alert variant="danger">メールアドレスかパスワードが違います</Alert>
            )}
            <Form.Group controlId="email">
              <Form.Label>Mail Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Please enter your Email address"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Please enter your password"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>
            <Button variant="light" onClick={this.click}>
              Login
            </Button>
          </Form>
        </div>
      </Container>
    );
  }
}

export default withRouter(Login);