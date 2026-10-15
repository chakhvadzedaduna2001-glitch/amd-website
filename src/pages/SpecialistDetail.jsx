import {useParams,Link} from 'react-router-dom'
import {specialists,services} from '../data'
export default function SpecialistDetail(){
  const {id}=useParams()
  const p=specialists.find(x=>x.id===id)
  if(!p)return(<section className="wrap sec"><h1>სპეციალისტი ვერ მოიძებნა</h1><Link to="/specialists" className="btn">ყველა სპეციალისტი</Link></section>)
  const mine=services.filter(s=>s.who===p.title)
  return(<section className="wrap sec"><Link to="/specialists" className="more">← ყველა სპეციალისტი</Link>
    <div className="two spd">
      <div className="phw big">{p.photo&&<img className="avatar" src={p.photo} alt={p.title}/>}{p.badge&&<span className="badge">{p.badge}</span>}</div>
      <div>{p.meta&&<span className="role" style={{marginTop:0}}>{p.meta}</span>}<h1>{p.title}</h1><p className="lead">{p.text}</p>
        {p.tags&&<div className="chips left">{p.tags.map(t=><span key={t}>{t}</span>)}</div>}
        {mine.length>0&&<><h3>მომსახურებები</h3><div className="chips left">{mine.map(s=><Link key={s.id} to={'/services/'+s.id}>{s.icon} {s.title}</Link>)}</div></>}
        <div className="row"><Link to="/register" className="btn">ბავშვის რეგისტრაცია</Link><Link to="/consultation" className="btn ghost">კონსულტაცია</Link></div></div></div></section>)
}
