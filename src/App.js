import React from 'react'
import { BrowserRouter ,Route,Routes} from 'react-router-dom'
import Header from './layout/Header'
import Home from './pages/Home'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Header/>}>
         <Route index element={<Home/>}/>
      
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
