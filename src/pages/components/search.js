import style from './search.css';
import qr from '../../assets/qr_code.svg';
import searchIcon from '../../assets/search.svg';
import history from '../../assets/history.svg';
import userIcon from '../../assets/user.svg';

export default function () {
  return (
    <div className={style.wrapper}>
      <img src={userIcon} alt="userIcon"/>
      <div className={style.content}>
        <img src={searchIcon} width="30px" height="70%" alt="searchIcon"/>
        <span>搜一搜</span>
        <img src={qr} width="30px" height="60%" alt="qr"/>
      </div>
      <img src={history} alt="history"/>
    </div>
  )
}
