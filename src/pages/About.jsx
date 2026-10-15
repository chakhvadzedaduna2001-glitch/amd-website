import {schedule} from '../data'
export default function About(){
  return(<section className="wrap sec"><h1>ჩვენს შესახებ</h1><p className="lead">მოძრაობისა და განვითარების აკადემია — ბავშვთა აბილიტაციისა და რეაბილიტაციის ცენტრი (Academy for Movement and Development).</p>
    <div className="grid">
      <div className="card"><div className="ico">💡</div><h3>იდეა</h3><p>ცენტრი შეიქმნა იმისთვის, რომ ბავშვებმა დღის განმავლობაში მიიღონ მათზე მორგებული მომსახურება და ივლონ სხვებთან ურთიერთობა.</p></div>
      <div className="card"><div className="ico">🎯</div><h3>მისია</h3><p>ყოველი ბავშვის განვითარება და დამოუკიდებლობის გაზრდა.</p></div>
      <div className="card"><div className="ico">🤝</div><h3>პრინციპები</h3><p>ინდივიდუალური მიდგომა, პატივისცემა, უსაფრთხოება და მშობლებთან თანამშრომლობა.</p></div>
      <div className="card"><div className="ico">🌱</div><h3>ჩვენი ისტორია</h3><p>მოძრაობისა და განვითარების აკადემია 8+ წელია ფუნქციონირებს. ბათუმში, აჭარაში ახლად გახსნილი ფილიალი უკვე 1 წელია მუშაობს.</p></div></div>
    <h2 className="st" style={{marginTop:48}}>ბავშვის ერთი დღე ცენტრში</h2>
    <div className="tl">{schedule.map(([t,d])=><div key={t}><b>{t}</b><span>{d}</span></div>)}</div></section>)
}
