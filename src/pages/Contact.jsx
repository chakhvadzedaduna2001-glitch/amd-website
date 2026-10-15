import {useState} from 'react'
import {contact} from '../data'
const empty={name:'',email:'',msg:''}
export default function Contact(){
  const [v,setV]=useState(empty)
  const [err,setErr]=useState({})
  const [done,setDone]=useState(false)
  const on=k=>e=>setV({...v,[k]:e.target.value})
  const submit=e=>{
    e.preventDefault()
    const x={}
    if(!v.name.trim())x.name='სავალდებულოა'
    if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='არასწორი ელფოსტა'
    if(!v.msg.trim())x.msg='სავალდებულოა'
    setErr(x)
    if(Object.keys(x).length)return
    console.log('contact',v)
    setDone(true);setV(empty)
  }
  return(<section className="wrap sec"><h1>კონტაქტი</h1>
    <div className="two"><div><p>📞 {contact.phone}</p><p>✉️ {contact.email}</p>
      {contact.addresses.map(a=><p key={a.city}>📍 {a.city}, {a.street} <a className="more" target="_blank" rel="noopener noreferrer" href={'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(a.city+', '+a.street)}>რუკაზე →</a></p>)}
      <p>🕘 {contact.hours}</p></div>
    <form onSubmit={submit} noValidate>
      {done&&<p className="ok">შეტყობინება გაიგზავნა.</p>}
      <label>სახელი<input value={v.name} onChange={on('name')}/></label>{err.name&&<small>{err.name}</small>}
      <label>ელფოსტა<input value={v.email} onChange={on('email')}/></label>{err.email&&<small>{err.email}</small>}
      <label>შეტყობინება<textarea rows="4" value={v.msg} onChange={on('msg')}/></label>{err.msg&&<small>{err.msg}</small>}
      <button className="btn">გაგზავნა</button></form></div></section>)
}
