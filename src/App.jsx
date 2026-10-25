import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ListPage from './pages/ListPage'
import StatePrograms from './components/StatePrograms'
import ServiceDetail from './pages/ServiceDetail'
import SpecialistDetail from './pages/SpecialistDetail'
import Gallery from './pages/Gallery'
import Register from './pages/Register'
import Contact from './pages/Contact'
import Support from './pages/Support'
import NotFound from './pages/NotFound'
import {services,programs,specialists,news} from './data'
const L=(title,intro,items,base)=><ListPage title={title} intro={intro} items={items} base={base}/>
export default function App(){
  return(
    <Routes><Route element={<Layout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={L('მომსახურებები','ბავშვის საჭიროებებზე მორგებული თერაპიები და აქტივობები.',services,'/services')}/>
      <Route path="/services/:id" element={<ServiceDetail/>}/>
      <Route path="/programs" element={<>{L('პროგრამები','განვითარებისა და დამოუკიდებლობის პროგრამები.',programs)}<StatePrograms/></>}/>
      <Route path="/specialists" element={L('სპეციალისტები','გამოცდილი გუნდი, რომელიც ბავშვზე ზრუნავს.',specialists,'/specialists')}/>
      <Route path="/specialists/:id" element={<SpecialistDetail/>}/>
      <Route path="/news" element={L('სიახლეები','ღონისძიებები და მშობლებისთვის სასარგებლო ინფორმაცია.',news)}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/register" element={<Register key="r" mode="register"/>}/>
      <Route path="/consultation" element={<Register key="c" mode="consult"/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/support" element={<Support/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Route></Routes>)
}
