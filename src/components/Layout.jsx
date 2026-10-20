import {useState} from 'react'
import {NavLink,Link,Outlet,useLocation} from 'react-router-dom'
import logo from '../brand/logo.webp'
import {contact} from '../data'
const links=[['/','მთავარი'],['/about','ჩვენს შესახებ'],['/services','მომსახურებები'],['/programs','პროგრამები'],['/specialists','სპეციალისტები'],['/news','სიახლეები'],['/gallery','გალერეა'],['/contact','კონტაქტი']]
let lastPath=null
export default function Layout(){
  const {pathname}=useLocation()
  if(lastPath!==null&&lastPath!==pathname)window.scrollTo(0,0)
  lastPath=pathname
  const [open,setOpen]=useState(false)
  return(<>
    <div className="topbar"><div className="wrap tb">
      <span>{contact.phone}</span><span className="hide">{contact.hours}</span><span>{contact.address}</span></div></div>
    <header className="nav"><div className="wrap navin">
      <Link to="/" className="logo" aria-label="Academy for Movement and Development"><img src={logo} alt="Academy for Movement and Development" width="700" height="324"/></Link>
      <button className="burger" onClick={()=>setOpen(!open)} aria-label="მენიუ">{open?'✕':'☰'}</button>
      <nav className={open?'open':''} onClick={()=>setOpen(false)}>
        {links.map(([to,t])=><NavLink key={to} to={to} end={to==='/'}>{t}</NavLink>)}
        <Link to="/support" className="heart"> მხარდაჭერა</Link>
        <Link to="/register" className="btn small">რეგისტრაცია</Link>
      </nav></div></header>
    <main><Outlet/></main>
    <footer><div className="wrap fgrid">
      <div><h4>მოძრაობისა და განვითარების აკადემია</h4><p>Academy for Movement and Development</p><p>ბავშვთა აბილიტაციისა და რეაბილიტაციის ცენტრი</p></div>
      <div><h4>გვერდები</h4>{links.slice(1,6).map(([to,t])=><Link key={to} to={to}>{t}</Link>)}</div>
      <div><h4>კონტაქტი</h4><p>{contact.phone}</p><p>{contact.email}</p>{contact.addresses.map(a=><p key={a.city}>{a.city}, {a.street}</p>)}</div>
    </div><p className="copy">© 2026 Academy for Movement and Development</p></footer>
    <a className="fab" href={'tel:'+contact.phone.replace(/\s/g,'')} aria-label="დარეკვა"><svg viewBox="0 0 24 24" width="26" height="26" fill="#fff" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 006.6 6.6l2.2-2.2a1 1 0 011-.25 11.4 11.4 0 003.6.6 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.6 3.6a1 1 0 01-.25 1z"/></svg></a></>)
}
