import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import User from './User';
import '../css/Logout.css'

export default class Logout extends Component {
  async componentDidMount() {
    await User.logout();
  }

  render() {
    return (
      <Container className="center logout__container">
        <div className="logout__block">
          <div>
            <h2>Thank you for visiting my website.</h2>
            <div>
              <Link to="/login">To Login Page</Link>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}