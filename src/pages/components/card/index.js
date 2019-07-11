import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Card from './card';
import style from './index.css';

export default function () {
  let [data, setData] = useState([{
    user:'拿皇',
    description:'6分钟无敌的男人',
    url:'https://raw.githubusercontent.com/Nirvana-cn/Photograph-deposit/master/douyu/video1.png'
  }]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/data')
      .then((val) => {
        setData(val.data)
      })
  })

  if(data.length === 1){
    return (
      <div className={style.wrapper}><Card data={data}></Card></div>
    )
  }else{
    return (
      <div className={style.wrapper}>
        {data.map((item, index) => {
          return <Card data={item} key={'key' + index}></Card>
        })}
      </div>
    )
  }
}
