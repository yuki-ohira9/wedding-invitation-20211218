import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'
import posed from 'react-pose'
import Swal from 'sweetalert2'

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Nav = posed.div(props)
const Box = posed.div(props)

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

    logout = async () => {
        Swal.fire({
            title: 'ログアウトしますか？',
            width: 600,
            padding: '3em',
            background: '#gray',
            showCancelButton: true,
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = '/logout';
            }
        })
    };

    render() {
        return (
            <div className="home__main">
                <Nav className="nav" pose={this.state.isVisible ? 'visible' : 'hidden'} >
                    <ul className="navbar">
                        <li className="navbar__item"><Link className="navbar__link" to="/home">Greeting</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/event">Event</Link></li>
                        <li className="navbar__item"><Link className="navbar__link" to="/rsvp">Rsvp</Link></li>
                        <li className="navbar__item navbar__link" onClick={this.logout}>Logout</li>
                    </ul>
                </Nav>
                <Box className="home__title" pose={this.state.isVisible ? 'visible' : 'hidden'} >Wedding Invitation</Box>
                <Box className="home__bride_and_groom" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                    Yuki & Rikako<br/>
                    December 18th
                </Box>
            </div>
        );
    }
}

export default NavBar;