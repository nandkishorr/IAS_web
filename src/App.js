import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Execom from './Pages/Execom'
import Gallery from './Pages/Gallery'
import Events from './Pages/Events'
import Appbar from './Components/Appbar/Appbar'
import Awards from './Pages/Awards'
import EventDetail from './Pages/EventDetail'
import Footer from './Components/Footer/Footer'
import details from "./Pages/details"
function App() {
  return (
   <div className='App'>
    <div className='header'><Appbar/></div>
    <div className='main-body'>
        <Routes>
                <Route  path='/' element={< Home />}></Route>
                <Route exact path='/about' element={< About />}></Route>  
                <Route exact path='/execom' element={< Execom />}></Route>
                <Route exact path='/events' element={< Events/>}></Route>
                <Route exact path='/gallery' element={< Gallery/>}></Route>
                <Route exact path='/awards' element={< Awards/>}></Route>
                <Route exact path='/contacts' element={< Contacts/>}></Route>
                 {  details.event.map((events,i)=> <Route exact path={`/events/${events.title}`} element={< EventDetail/>}></Route>
                 )}
               
                {/* <Route exact path='events/Candle' element={< EventDetail/>}></Route>
                <Route exact path='events/Learn' element={< EventDetail/>}></Route>
                <Route exact path='events/Foster' element={< EventDetail/>}></Route>
                <Route exact path='events/Techinophilia' element={< EventDetail/>}></Route>
                <Route exact path='events/Voltare' element={< EventDetail/>}></Route>
                <Route exact path='events/Voltare2023' element={< EventDetail/>}></Route>
                <Route exact path='events/ExploreIAS' element={< EventDetail/>}></Route> */}
                
        </Routes>
      </div>
      <Footer/>
   </div>
  )
}

export default App
