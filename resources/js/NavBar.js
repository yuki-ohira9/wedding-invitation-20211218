import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'
import posed from 'react-pose'

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Nav = posed.div(props)

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            nextId: 0
        }
    }
    
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isVisible: !this.state.isVisible });
        }, 1500);
    }

    render() {
        return (
            <div>
                <Nav className="nav" pose={this.state.isVisible ? 'visible' : 'hidden'} >
                    <ul className="navbar">
                        <li className="navbar__item"><Link className="navbar__link" to="/home">Greeting</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/event">Event</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/rsvp">Rsvp</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/">Login</Link></li>
                    </ul>
                </Nav>
            </div>
        );
    }
}

export default NavBar;