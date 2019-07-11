import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import pictureOne from '../../../assets/p1.png';
import pictureTwo from '../../../assets/p2.png';
import pictureThree from '../../../assets/p3.png';

export default class App extends React.Component {
  state = {
    data: [pictureOne,pictureTwo,pictureThree],
    imgHeight: 176,
  }

  render() {
    return (
      <WingBlank>
        <div style={{borderRadius: '10px', overflow:'hidden', margin: '10px 0'}}>
          <Carousel
            autoplay={true}
            infinite
          >
            {this.state.data.map((val,index) => (
              <a
                key={'id'+index}
                href="http://iceiceice.top"
                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight}}
              >
                <img
                  src={val}
                  alt=""
                  style={{ width: '100%', verticalAlign: 'top'}}
                  onLoad={() => {
                    window.dispatchEvent(new Event('resize'));
                    this.setState({ imgHeight: 'auto' });
                  }}
                />
              </a>
            ))}
          </Carousel>
        </div>

      </WingBlank>
    );
  }
}

