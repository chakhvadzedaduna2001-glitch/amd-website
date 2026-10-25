import {useState} from 'react'
import {statePrograms} from '../data'
const pin=<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/></svg>
export default function StatePrograms(){
  const [open,setOpen]=useState(null)
  const cur=statePrograms.find(p=>p.id===open)
  return(<section className="wrap sec"><h2 className="st">სახელმწიფო და მუნიციპალური პროგრამები</h2>
    <p className="lead" style={{textAlign:'center'}}>ბავშვებისთვის არსებობს სახელმწიფო და მუნიციპალური პროგრამები. მოკლე ინფორმაცია ოფიციალური წყაროებიდან ქვემოთაა.</p>
    <div className="notice">{pin}<span><b>ყურადღება:</b> ეს პროგრამები მოქმედებს მხოლოდ ბათუმის ფილიალში (აჭარა). თბილისის ფილიალზე არ ვრცელდება.</span></div>
    <div className="grid sp2">{statePrograms.map(p=>(
      <article key={p.id} className={'card pcard'+(open===p.id?' on':'')}>
        <span className="tag">{p.orgShort}</span>
        <h3>{p.title}</h3><p>{p.summary}</p>
        <button type="button" className="btn small" aria-expanded={open===p.id} onClick={()=>setOpen(open===p.id?null:p.id)}>{open===p.id?'დახურვა':'როგორ ჩავერთო?'}</button>
      </article>))}</div>
    {cur&&<div className="how wide">
      <h3>{cur.title}</h3><p className="mut">{cur.org}</p>
      <h4>პროგრამის მიზანი</h4><p>{cur.purpose}</p>
      <div className="howgrid">
        <div><h4>ვის ეხება</h4><ul>{cur.eligibility.map(t=><li key={t}>{t}</li>)}</ul>
          <h4>როგორ ჩავერთოთ</h4><ol>{cur.steps.map(t=><li key={t}>{t}</li>)}</ol></div>
        <div><h4>საჭირო საბუთები</h4><p>{cur.docs}</p>
          {cur.phone&&<p><b>ცხელი ხაზი:</b> <a className="more" href={'tel:'+cur.phone.replace(/[^+\d]/g,'')}>{cur.phone}</a></p>}
          <h4>ოფიციალური ბმულები</h4><ul>{cur.links.map(l=><li key={l.url}><a className="more" href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>)}</ul>
          <p className="mut">{cur.source}</p></div></div></div>}
    <p className="note">ინფორმაცია აღებულია ოფიციალური გვერდებიდან 2026 წლის ოქტომბრის მდგომარეობით. პირობები შეიძლება შეიცვალოს, ამიტომ საბოლოო დაზუსტებისთვის მიმართეთ პროგრამის ორგანიზატორს.</p></section>)
}
