import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import LandPag from './Components/LandPag'

function App() {

  return (
    
    <BrowserRouter>
     <Routes>
       <Route path="/" element={[<LandPag />]} />
     </Routes>
    </BrowserRouter>

  )
}

export default App
