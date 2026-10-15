import Card from '../components/Card'
export default function ListPage({title,intro,items,base}){
  return(<section className="wrap sec"><h1>{title}</h1><p className="lead">{intro}</p>
    <div className="grid">{items.map((i,k)=><Card key={k} {...i} to={base&&i.id?base+'/'+i.id:undefined}/>)}</div></section>)
}
