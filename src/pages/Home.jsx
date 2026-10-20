import {Link} from 'react-router-dom'
import Card from '../components/Card'
import Faq from '../components/Faq'
import logo from '../brand/logo.webp'
import {services,programs,specialists,gallery,stats,steps,testimonials,faqs} from '../data'
export default function Home(){
  return(<>
    <section className="hero"><span className="b b1"/><span className="b b2"/><div className="wrap herogrid">
      <div><span className="pill">მოძრაობისა და განვითარების აკადემია</span>
        <h1>სადაც ბავშვი თავს <em>უსაფრთხოდ</em> გრძნობს და ვითარდება</h1>
        <p>ბავშვთა აბილიტაციისა და რეაბილიტაციის ცენტრი: თერაპია, თამაში და მეგობრული გარემო ერთ სივრცეში.</p>
        <div className="row"><Link to="/register" className="btn">ბავშვის რეგისტრაცია</Link><Link to="/consultation" className="btn ghost">უფასო კონსულტაცია</Link></div>
        <ul className="checks"><li>ინდივიდუალური გეგმა</li><li>გამოცდილი გუნდი</li><li>თბილი გარემო</li><li>8+ წლის გამოცდილება</li></ul></div>
      <div className="herologo"><img src={logo} alt="Academy for Movement and Development" width="700" height="324" fetchPriority="high"/></div>
    </div></section>
    <section className="wrap stats">{stats.map(([n,t])=><div key={t}><b>{n}</b><span>{t}</span></div>)}</section>
    <section className="wrap sec"><div className="story"><span className="newb">ბათუმში ახლად გახსნილი ფილიალი</span>
      <h2>8+ წელია ვზრუნავთ ბავშვების განვითარებაზე</h2>
      <p>მოძრაობისა და განვითარების აკადემია 8+ წელია ფუნქციონირებს. ახლა ბათუმშიც ვართ: აჭარაში ახლად გახსნილი ფილიალი უკვე 1 წელია მუშაობს. ჩვენი მიზანია, ყოველ ბავშვს მივცეთ მოძრაობისა და განვითარების შესაძლებლობა თბილ და უსაფრთხო გარემოში.</p>
      <Link to="/about" className="btn">გაიგე მეტი ჩვენს შესახებ</Link></div></section>
    <section className="wrap sec"><h2 className="st">ჩვენი მომსახურებები</h2>
      <div className="grid compact">{services.map((s,k)=><Card key={k} {...s} to={'/services/'+s.id}/>)}</div>
      <p style={{textAlign:'center',marginTop:20}}><Link to="/services" className="btn ghost">ჩვენი მომსახურებები</Link></p></section>
    <section className="band"><div className="wrap sec"><h2 className="st">როგორ ვიწყებთ?</h2>
      <div className="grid">{steps.map(([n,t,d])=><div key={n} className="step"><i>{n}</i><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <section className="wrap sec"><h2 className="st">ჩვენი გუნდი</h2>
      <div className="grid">{specialists.filter(s=>s.id).map(s=><Card key={s.id} {...s} to={'/specialists/'+s.id}/>)}</div>
      <p style={{textAlign:'center',marginTop:20}}><Link to="/specialists" className="btn ghost">გაიცანით ჩვენი გუნდი</Link></p></section>
    <section className="wrap sec"><h2 className="st">პროგრამები</h2>
      <div className="grid">{programs.map((s,k)=><Card key={k} {...s}/>)}</div></section>
    <section className="band"><div className="wrap sec"><h2 className="st">მშობლები ჩვენს შესახებ</h2>
      <div className="grid">{testimonials.map(t=><blockquote key={t.name} className="card q">“{t.text}”<cite>— {t.name}</cite></blockquote>)}</div></div></section>
    <section className="wrap sec"><h2 className="st">ჩვენი გარემო</h2>
      <div className="gal home">{gallery.slice(0,3).map((g,k)=><figure key={k}><img src={g.src} alt={g.alt} loading="lazy" decoding="async"/></figure>)}</div>
      <p style={{textAlign:'center',marginTop:20}}><Link to="/gallery" className="btn ghost">გალერეა</Link></p></section>
    <section className="wrap sec narrow"><h2 className="st">ხშირად დასმული კითხვები</h2><Faq items={faqs}/></section>
    <section className="wrap"><div className="cta"><h2>მზად ხართ პირველი ნაბიჯისთვის?</h2><p>დაგვიტოვეთ განაცხადი და მალე დაგიკავშირდებით.</p>
      <div className="row" style={{justifyContent:'center'}}><Link to="/register" className="btn light">დაიწყეთ ახლავე</Link><Link to="/contact" className="btn ghostlight">დაგვიკავშირდით</Link></div></div></section></>)
}
