import React from 'react'
import Home from './Pages/Home'
import {Routes,Route} from "react-router-dom"
import About from './Pages/About'
import Contacts from './Pages/Contacts'
import Execom from './Pages/Execom'
import Gallery from './Pages/Gallery'
import Events from './Pages/Events'
import Navbar from './Components/Appbar/Appbar'
import Awards from './Pages/Awards'
import EventDetail from './Pages/EventDetail'

function App() {
  return (
   <div className='App'>
    <div className='header'><Navbar/></div>
    <div className='main-body'>
        <Routes>
                <Route  path='/' element={< Home />}></Route>
                <Route exact path='about' element={< About />}></Route>  
                <Route exact path='execom' element={< Execom />}></Route>
                <Route exact path='events' element={< Events/>}></Route>
                <Route exact path='gallery' element={< Gallery/>}></Route>
                <Route exact path='awards' element={< Awards/>}></Route>
                <Route exact path='contacts' element={< Contacts/>}></Route>
                <Route exact path='events/details' element={< EventDetail/>}></Route>
        </Routes>
      </div>
   </div>
  )
}

export default App
