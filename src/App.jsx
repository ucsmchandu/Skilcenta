import React from 'react'
import MainLayout from './mainLayout/MainLayout'
import Home from './pages/Home'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Aibot from './pages/Aibot'
import Roadmap from './pages/Roadmap'
import Resources from './pages/Resources'
import Market from './pages/Market'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import Map from './pages/map'
import Sellitem from './pages/Sellitem'
import Upload from './server/Upload'
import Retrive from './server/Retrive'
import Admin from './Adminpanel/Admin'
const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="aibot" element={<Aibot/>} />
        <Route path="roadmap" element={<Roadmap/>} />
        <Route path="resources" element={<Resources/>} />
        <Route path="market" element={<Market/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="profile" element={<Profile/>} />
        <Route path="about" element={<About/>} />
        <Route path="map" element={<Map/>} />
        <Route path="sellitem" element={<Sellitem/>} />
        <Route path="uploaddata" element={<Upload/>} />
        <Route path="retrivedata" element={<Retrive/>} />
        <Route path="admin" element={<Admin/>} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App