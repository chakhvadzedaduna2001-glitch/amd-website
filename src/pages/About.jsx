import {Link} from 'react-router-dom'
import {schedule,gallery} from '../data'
const blocks=[
['ისტორია','მოძრაობისა და განვითარების აკადემია 8+ წელია ფუნქციონირებს. ბათუმში, აჭარაში ახლად გახსნილი ფილიალი უკვე 1 წელია მუშაობს.'],
['მისია','ყოველი ბავშვის განვითარება და დამოუკიდებლობის გაზრდა.'],
['ხედვა','სივრცე, სადაც ბავშვები იღებენ მათზე მორგებულ მხარდაჭერას, ოჯახები კი თავს უსაფრთხოდ გრძნობენ.'],
['ღირებულებები','ინდივიდუალური მიდგომა, პატივისცემა და უსაფრთხოება, თანამშრომლობა მშობლებთან.'],
['ვის ემსახურება','სპეციალური საჭიროებების მქონე ბავშვებს და მათ ოჯახებს.'],
['მუშაობის მიდგომა და გარემო','ბავშვები დღის განმავლობაში იღებენ მათზე მორგებულ მომსახურებებს, თამაშობენ, ვითარდებიან და სხვა ბავშვებთან ურთიერთობენ თბილ და უსაფრთხო გარემოში.']]
export default function About(){
  return(<section className="wrap sec"><h1>ჩვენს შესახებ</h1>
    <p className="lead">მოძრაობისა და განვითარების აკადემია, ბავშვთა აბილიტაციისა და რეაბილიტაციის ცენტრი (Academy for Movement and Development).</p>
    <div className="grid">{blocks.map(([t,d])=><div key={t} className="card"><h3>{t}</h3><p>{d}</p></div>)}</div>
    <div className="gal home">{[gallery[0],gallery[2],gallery[3]].filter(Boolean).map((g,k)=><figure key={k}><img src={g.src} alt={g.alt} loading="lazy" decoding="async"/></figure>)}</div>
    <h2 className="st" style={{marginTop:48}}>ბავშვის ერთი დღე ცენტრში</h2>
    <div className="tl">{schedule.map(([t,d])=><div key={t}><b>{t}</b><span>{d}</span></div>)}</div>
    <div className="row" style={{justifyContent:'center',marginTop:32}}><Link to="/specialists" className="btn ghost">გაიცანით ჩვენი გუნდი</Link><Link to="/contact" className="btn">დაგვიკავშირდით</Link></div></section>)
}
