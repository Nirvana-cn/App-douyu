import { Icon } from 'antd-mobile';
import style from './card.css'

export default function (props) {
  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <img src={props.data.url} alt="pic" width="100%" height="80%"/>
        <div className={style.user}>{props.data.user}</div>
      </div>
      <div className={style.bottom}>
        {props.data.description}
        <Icon type="ellipsis" color="#CCC"></Icon>
      </div>
    </div>
  )
}
