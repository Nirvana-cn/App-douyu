import hot from '../../../assets/hot.svg'
import bullseye from '../../../assets/bullseye.svg'

export default function () {
  return (
    <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:'1rem'}}>
        <img src={hot} alt="hot" width="30px" height="30px"/>
        <div style={{fontSize:'1rem',fontWeight:'600',marginLeft:'0.6rem'}}>猜你喜欢</div>
      </div>
      <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',alignItems:'center',padding:'1rem'}}>
        <img src={bullseye} alt="hot" width="20px" height="20px"/>
        <div style={{fontSize:'0.8rem',fontWeight:'400',marginLeft:'0.6rem', color:'#E85529'}}>点我猜更准</div>
      </div>
    </div>
  )
}
