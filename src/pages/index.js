import TabBarExample from './components/nav'
import style from './index.css'
import SearchBar from './components/search'

export default function() {
  return (
    <div className={style.wrapper}>
      <div className={style.top}>
        <SearchBar></SearchBar>
      </div>
      <div className={style.main}>
        <TabBarExample></TabBarExample>
      </div>
    </div>
  );
}
