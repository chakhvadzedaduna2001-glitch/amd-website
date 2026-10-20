import {Link} from 'react-router-dom'
export default function Card({icon,photo,badge,title,text,meta,tags,to}){
  const body=photo?(<>
    <div className="phw"><img className="avatar" src={photo} alt={title} loading="lazy"/>{badge&&<span className="badge">{badge}</span>}</div>
    <div className="spb">{meta&&<span className="role">{meta}</span>}<h3>{title}</h3><p className="clamp">{text}</p>
      {tags&&<div className="chips">{tags.map(t=><span key={t}>{t}</span>)}</div>}
      {to&&<span className="more">მეტის ნახვა →</span>}</div></>):(<>
    {icon&&<div className="ico">{icon}</div>}<h3>{title}</h3><p>{text}</p>{meta&&<span className="tag">{meta}</span>}
    {to&&<span className="more">გაიგე მეტი →</span>}</>)
  const cls='card'+(photo?' sp':'')+(to?' link':'')
  return to?<Link to={to} className={cls}>{body}</Link>:<article className={cls}>{body}</article>
}
