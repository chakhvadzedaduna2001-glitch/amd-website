import {useState} from 'react'
export default function Faq({items}){
  const [o,setO]=useState(0)
  return(<div className="faq">{items.map(([q,a],i)=>(
    <div key={i} className={'faqi'+(o===i?' on':'')}>
      <button onClick={()=>setO(o===i?-1:i)}>{q}<span>{o===i?'−':'+'}</span></button>
      {o===i&&<p>{a}</p>}</div>))}</div>)
}
