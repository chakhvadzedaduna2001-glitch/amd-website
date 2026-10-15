import {useParams,Link} from 'react-router-dom'
import Card from '../components/Card'
import {services,specialists} from '../data'
export default function ServiceDetail(){
  const {id}=useParams()
  const s=services.find(x=>x.id===id)
  if(!s)return(<section className="wrap sec"><h1>მომსახურება ვერ მოიძებნა</h1><Link to="/services" className="btn">ყველა მომსახურება</Link></section>)
  const sp=specialists.filter(p=>p.title===s.who)
  return(<section className="wrap sec"><Link to="/services" className="more">← ყველა მომსახურება</Link>
    <div className={sp.length?'two sd':'sd'}>
      <div><div className="ico big">{s.icon}</div><h1>{s.title}</h1><p className="lead">{s.text}</p>
        <div className="row"><Link to="/register" className="btn">ბავშვის რეგისტრაცია</Link><Link to="/consultation" className="btn ghost">კონსულტაცია</Link></div></div>
      {sp.length>0&&<div><h3>ჩვენი სპეციალისტი</h3>{sp.map(p=><Card key={p.title} {...p}/>)}</div>}</div>
    <h2 className="st">სხვა მომსახურებები</h2>
    <div className="grid">{services.filter(x=>x.id!==id).slice(0,3).map(o=><Card key={o.id} {...o} to={'/services/'+o.id}/>)}</div></section>)
}
