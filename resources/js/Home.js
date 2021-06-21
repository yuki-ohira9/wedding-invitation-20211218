import React from 'react';
import posed from 'react-pose'
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
          <div className="home__main">
            <div className="home__name">
              <Box className="home__title" pose={this.state.isVisible ? 'visible' : 'hidden'} >Wedding Invitation</Box>
              <Box className="home__bride_and_groom" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                Yuki & Rikako<br/>
                December 18th
              </Box>
              <Box className="home__description">
                <div className="home__description_block">
                  皆様におかれましては<br/>
                  ますますご清祥のこととお慶び申し上げます
                </div>
                <div className="home__description_block">
                  このたび 私たちは結婚をすることになりました<br/>
                  つきましては日頃お世話になっております皆様に<br/>
                  感謝を込めて ささやかな小宴を催したく存じます
                </div>
                <div className="home__description_block">
                  ご多用中 誠に恐縮ではございますが<br/>
                  ぜひ ご出席をいただきたく ご案内申し上げます<br/>
                </div>
              </Box>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home;