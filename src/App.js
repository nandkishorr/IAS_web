import React from 'react'
import Home from './Components/Home'
import {Routes,Route} from "react-router-dom"
import About from './Components/About'
import Contacts from './Components/Contacts'
import Execom from './Components/Execom'
import Gallery from './Components/Gallery'
import Events from './Components/Events'

function App() {
  return (
   <div className='App'>
    <div className='header'>hello world</div>
      <div className='main'>
        
      <Routes>

              <Route  path='/' element={< Home />}></Route>  
              <Route exact path='about' element={< About />}></Route>  
              <Route exact path='execom' element={< Execom />}></Route>
              <Route exact path='events' element={< Events/>}></Route>
              <Route exact path='gallery' element={< Gallery/>}></Route>
              <Route exact path='contacts' element={< Contacts/>}></Route>
         
          </Routes>

      </div>
    

   </div>
  )
}

export default App
