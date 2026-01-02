import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LandPag from './Components/LandPag'
import Vehicles from './Components/Vehicles'

function App() {

  return (
    
    <BrowserRouter>
     <Routes>
       <Route path="/" element={[<LandPag />, <Vehicles />]} />
     </Routes>
    </BrowserRouter>

  )
}

export default App
