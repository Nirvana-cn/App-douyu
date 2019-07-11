import {Carousel} from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React from 'react';
import style from './Carousel_column.css'
import timer from '../../../assets/timer.svg'

export default class App extends React.Component {
  render() {
    return (
      <div className={style.wrapper}>
        <Carousel className="my-carousel"
                  vertical
                  dots={false}
                  dragging={false}
                  swiping={false}
                  autoplay
                  infinite
        >
          <div className={style.item}>
            <img src={timer} height="60%" alt="timer" style={{marginRight: '1rem'}}/>
            <span style={{marginLeft:'-1.5rem'}}>TI9中国区预选赛</span>
            <span style={{color: "#ccc"}}>7/11 19:00</span>
            <button style={{color: "#E85529", border: "1px solid #EF8C70", backgroundColor: "#fff", borderRadius: "6px"}}>预定</button>
          </div>
          <div className={style.item}>
            <img src={timer} height="60%"  alt="timer" style={{marginRight: '1rem'}}/>
            <span style={{marginLeft:'-1.5rem'}}>大吉大利，今晚吃鸡</span>
            <span style={{color: "#ccc"}}>7/20 20:00</span>
            <button style={{color: "#E85529", border: "1px solid #EF8C70", backgroundColor: "#fff", borderRadius: "6px"}}>预定</button>
          </div>
        </Carousel>
      </div>
    );
  }
}
