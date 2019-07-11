import { Grid } from 'antd-mobile';
import './Grid.css'


const arr = ['Dota2','英雄联盟','绝地求生','王者荣耀','主机游戏','贪吃蛇','穿越火线','DNF'];
const data = arr.map((item,index) => {
  let str = `https://raw.githubusercontent.com/Nirvana-cn/Photograph-deposit/master/douyu/game${index+1}.png`
  return {
    icon: str,
    text: item
  }
});

export default function GridExample(){
  return(
    <div>
      <Grid data={data} activeStyle={false} />
    </div>
  );
}
