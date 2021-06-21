import React from 'react';
import posed from 'react-pose'
import '../css/Home.css'
import Groom from '../../public/images/groom.jpg'
import Bride from '../../public/images/bride.jpg'

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
              <Box className="home__description font_gray" pose={this.state.isVisible ? 'visible' : 'hidden'}>
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
              <Box className="home__introduction font_gray" pose={this.state.isVisible ? 'visible' : 'hidden'}>
                <div className="home__introduction_block">
                  <div className="home__introduction_image_block">
                    <img src={Groom} className="home__introduction_image" alt="groom" />
                  </div>
                  <div className="home__introduction_description_block home__introduction_description_name">
                    大平 悠貴
                  </div>
                  <div className="home__introduction_description_block">
                    1994年6月12日生まれ
                  </div>
                  <div className="home__introduction_description_block">
                    職業はSE
                  </div>
                  <div className="home__introduction_description_block">
                    趣味は野球、DIY
                  </div>
                </div>
                <div className="home__introduction_block">
                  <div className="home__introduction_image_block">
                    <img src={Bride} className="home__introduction_image" alt="bride" />
                  </div>
                  <div className="home__introduction_description_block home__introduction_description_name">
                    野田 梨香子
                  </div>
                  <div className="home__introduction_description_block">
                    1997年2月12日生まれ
                  </div>
                  <div className="home__introduction_description_block">
                    職業はSE
                  </div>
                  <div className="home__introduction_description_block">
                    趣味は料理、漫画、絵画
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      )
    }
  }

export default Home;