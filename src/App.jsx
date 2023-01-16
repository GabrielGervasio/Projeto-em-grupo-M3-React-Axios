import { Outlet } from 'react-router-dom'

import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Carrossel from './components/Carrossel'



function App() {

  return (
    <div className="App">
      <Navbar />
     <div /*className='container'*/>
       <Outlet />
     </div>
     
     <Footer />
    </div>
  )
}

export default App
