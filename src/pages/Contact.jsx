import {useState} from 'react'
import {contact} from '../data'
import {send} from '../api'
import Socials from '../components/Socials'
const empty={name:'',email:'',msg:''}
const q=a=>encodeURIComponent(a.city+', '+a.street)
const pin=<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
export default function Contact(){
  const [v,setV]=useState(empty)
  const [err,setErr]=useState({})
  const [done,setDone]=useState(false)
  const [busy,setBusy]=useState(false)
  const [fail,setFail]=useState(false)
  const on=k=>e=>setV({...v,[k]:e.target.value})
  const submit=async e=>{
    e.preventDefault()
    const x={}
    if(!v.name.trim())x.name='სახელის მითითება სავალდებულოა'
    if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='ჩაწერეთ სწორი ელფოსტა'
    if(!v.msg.trim())x.msg='დაწერეთ შეტყობინება'
    setErr(x);setDone(false);setFail(false)
    if(Object.keys(x).length)return
    setBusy(true)
    try{await send('contact',v);setDone(true);setV(empty)}catch{setFail(true)}
    setBusy(false)
  }
  return(<section className="wrap sec"><h1>კონტაქტი</h1>
    <div className="two"><div>
      <p><b>ტელეფონი:</b> <a className="more" href={'tel:'+contact.phone.replace(/\s/g,'')}>{contact.phone}</a></p>
      <p><b>ელფოსტა:</b> <a className="more" href={'mailto:'+contact.email}>{contact.email}</a></p>
      {contact.addresses.map(a=><a key={a.city} className="card link addr" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/search/?api=1&query='+q(a)}>{pin}<span><b>{a.city}</b><span>{a.street}</span><span className="more">რუკაზე ნახვა →</span></span></a>)}
      <p><b>სამუშაო საათები:</b> {contact.hours}</p>
      <p><b>სოციალური ქსელები:</b></p><Socials/>
    </div>
    <form onSubmit={submit} noValidate>
      {done&&<p className="ok">შეტყობინება წარმატებით გაიგზავნა.</p>}
      {fail&&<p className="bad">გაგზავნა ვერ მოხერხდა. სცადეთ თავიდან ან დაგვირეკეთ.</p>}
      <label>სახელი<input value={v.name} onChange={on('name')}/></label>{err.name&&<small>{err.name}</small>}
      <label>ელფოსტა<input value={v.email} onChange={on('email')}/></label>{err.email&&<small>{err.email}</small>}
      <label>შეტყობინება<textarea rows="4" value={v.msg} onChange={on('msg')}/></label>{err.msg&&<small>{err.msg}</small>}
      <button className="btn" disabled={busy}>{busy?'იგზავნება...':'გაგზავნა'}</button></form></div>
    <div className="maps">{contact.addresses.map(a=><iframe key={a.city} title={'რუკა: '+a.city} src={'https://www.google.com/maps?q='+q(a)+'&output=embed'} loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>)}</div></section>)
}
