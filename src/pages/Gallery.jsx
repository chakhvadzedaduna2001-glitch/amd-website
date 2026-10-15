import {useState} from 'react'
import {gallery} from '../data'
export default function Gallery(){
  const [i,setI]=useState(null)
  const go=d=>setI(x=>(x+d+gallery.length)%gallery.length)
  const key=e=>{if(e.key==='Escape')setI(null);if(e.key==='ArrowRight')go(1);if(e.key==='ArrowLeft')go(-1)}
  return(<section className="wrap sec"><h1>გალერეა</h1><p className="lead">ჩვენი სივრცე, აქტივობები და ღონისძიებები.</p>
    <div className="gal">{gallery.map((g,k)=>(
      <figure key={k} onClick={()=>setI(k)} tabIndex={0} onKeyDown={e=>e.key==='Enter'&&setI(k)}>
        <img src={g.src} alt={g.alt} loading="lazy" decoding="async"/>
        {g.cap&&<figcaption>{g.cap}</figcaption>}</figure>))}</div>
    {i!==null&&<div className="lb" onClick={()=>setI(null)} onKeyDown={key} tabIndex={0} ref={el=>{if(el)el.focus()}} role="dialog" aria-modal="true">
      <button className="x" aria-label="დახურვა">✕</button>
      <button className="nv l" onClick={e=>{e.stopPropagation();go(-1)}} aria-label="წინა">‹</button>
      <img src={gallery[i].src} alt={gallery[i].alt} onClick={e=>e.stopPropagation()}/>
      <button className="nv r" onClick={e=>{e.stopPropagation();go(1)}} aria-label="შემდეგი">›</button>
      <p>{gallery[i].cap&&gallery[i].cap+' · '}{i+1}/{gallery.length}</p></div>}</section>)
}
