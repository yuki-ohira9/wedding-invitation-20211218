import React from 'react';
import posed from 'react-pose'
import Animation from './Animation'
import BorderYellow from './BorderYellow'
import '../css/Home.css'

const props = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
}
const Box = posed.div(props)

class Home extends React.Component {
    state = { isVisible: false };
  
    componentDidMount() {
      setTimeout(() => {
        this.setState({ isVisible: !this.state.isVisible });
      }, 1000);
    }
    render(){
      return(
        <div className="wrapper">
          {/* <BorderYellow display="true"/> */}
          <div className="home__main">
            {/* <Animation className="animation" /> */}
            <div className="home__name">
              <Box className="name" pose={this.state.isVisible ? 'visible' : 'hidden'} >Wedding Invitation</Box>
              <Box className="home__description" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                Yuki & Rikako<br/>
                December 18th
              </Box>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home;