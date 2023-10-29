import { Route, Routes } from 'react-router-dom'
import Home from './view/Home'
import NavBarView from './components/NavBarView'
import NavBarComp from './components/NavBarComp'
import './styles/NavBarview.css'
import { Divider } from '@mui/material'
import Footer from './components/Footer'
import About from './view/About'
import LoginView from './components/LoginView'
import RegisterView from './components/RegisterView'

function App() {
  return (
    <>
      <NavBarView />
      <NavBarComp />
      <Divider />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/login' element={<LoginView />} />
        <Route exact path='/register' element={<RegisterView />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
