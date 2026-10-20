import {useParams,Link} from 'react-router-dom'
import Card from '../components/Card'
import {services,specialists,steps} from '../data'
export default function ServiceDetail(){
  const {id}=useParams()
  const s=services.find(x=>x.id===id)
  if(!s)return(<section className="wrap sec"><h1>მომსახურება ვერ მოიძებნა</h1><Link to="/services" className="btn">ყველა მომსახურება</Link></section>)
  const sp=specialists.filter(p=>p.title===s.who)
  return(<section className="wrap sec"><Link to="/services" className="more">← ყველა მომსახურება</Link>
    <h1>{s.title}</h1>
    <div className={sp.length?'two sd':'sd'}>
      <div>
        <h3>მიზანი</h3><p>{s.text}</p>
        {s.forWhom&&<><h3>ვის შეიძლება დაეხმაროს</h3><p>{s.forWhom}</p></>}
        <h3>როგორ მიმდინარეობს პროცესი</h3>
        <ol className="proc">{steps.map(([n,t,d])=><li key={n}><b>{t}.</b> {d}</li>)}</ol>
        <div className="row"><Link to="/consultation" className="btn">დაინტერესებული ვარ</Link><Link to="/register" className="btn ghost">ბავშვის რეგისტრაცია</Link></div></div>
      {sp.length>0&&<div><h3>ჩვენი სპეციალისტი</h3>{sp.map(p=><Card key={p.title} {...p} to={p.id?'/specialists/'+p.id:undefined}/>)}</div>}</div>
    <h2 className="st">სხვა მომსახურებები</h2>
    <div className="grid">{services.filter(x=>x.id!==id).slice(0,3).map(o=><Card key={o.id} {...o} to={'/services/'+o.id}/>)}</div></section>)
}
