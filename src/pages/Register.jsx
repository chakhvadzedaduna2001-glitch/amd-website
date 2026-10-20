import {useState} from 'react'
import {services} from '../data'
import {send} from '../api'
const empty={parent:'',phone:'',email:'',age:'',service:'',message:''}
export default function Register({mode}){
  const consult=mode==='consult'
  const [v,setV]=useState(empty)
  const [err,setErr]=useState({})
  const [done,setDone]=useState(false)
  const [busy,setBusy]=useState(false)
  const [fail,setFail]=useState(false)
  const on=k=>e=>setV({...v,[k]:e.target.value})
  const submit=async e=>{
    e.preventDefault()
    const x={}
    if(!v.parent.trim())x.parent='სახელის მითითება სავალდებულოა'
    if(!/^[+\d\s-]{9,}$/.test(v.phone))x.phone='ჩაწერეთ სწორი ტელეფონის ნომერი'
    if(v.email&&!/^\S+@\S+\.\S+$/.test(v.email))x.email='ჩაწერეთ სწორი ელფოსტა'
    if(!consult&&!v.age)x.age='ბავშვის ასაკის მითითება სავალდებულოა'
    setErr(x);setDone(false);setFail(false)
    if(Object.keys(x).length)return
    setBusy(true)
    try{await send(consult?'consultation':'registration',v);setDone(true);setV(empty)}catch{setFail(true)}
    setBusy(false)
  }
  return(<section className="wrap sec narrow"><h1>{consult?'კონსულტაციის მოთხოვნა':'ბავშვის რეგისტრაცია'}</h1>
    {done&&<p className="ok">გმადლობთ! თქვენი განაცხადი მიღებულია, მალე დაგიკავშირდებით.</p>}
    {fail&&<p className="bad">გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან დაგვირეკეთ.</p>}
    <form onSubmit={submit} noValidate>
      <label>მშობლის სახელი<input value={v.parent} onChange={on('parent')}/></label>{err.parent&&<small>{err.parent}</small>}
      <label>ტელეფონი<input value={v.phone} onChange={on('phone')}/></label>{err.phone&&<small>{err.phone}</small>}
      <label>ელფოსტა<input type="email" value={v.email} onChange={on('email')}/></label>{err.email&&<small>{err.email}</small>}
      {!consult&&<><label>ბავშვის ასაკი<input type="number" min="1" max="18" value={v.age} onChange={on('age')}/></label>{err.age&&<small>{err.age}</small>}</>}
      <label>მომსახურება<select value={v.service} onChange={on('service')}><option value="">აირჩიეთ</option>{services.map(s=><option key={s.title}>{s.title}</option>)}</select></label>
      <label>შეტყობინება<textarea rows="4" value={v.message} onChange={on('message')}/></label>
      <button className="btn" disabled={busy}>{busy?'იგზავნება...':'გაგზავნა'}</button></form></section>)
}
