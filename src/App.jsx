import React from 'react'
import { ToastContainer } from 'react-toastify'
import AuthContextProvider from './contextApi/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
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
import Sellitem from './pages/Sellitem'
import Admin from './Adminpanel/Admin'
import Delete from './server/Delete'
import Update from './server/Update'
import Login from './pages/Login'
import Register from './pages/Register'
import Checkout from './pages/Checkout'
import ProductBuy from './pages/ProductBuy'
import OrderPop from './pages/OrderPop'
import OrdersPage from './pages/OrdersPage'
import AllOrders from './Adminpanel/AllOrders'
const App = () => {
  return (
    <AuthContextProvider>
    <Router>
      <Routes>
        <Route path="/*" element={<MainLayout/>} >
        <Route index element={<Home/>}/>
        <Route path="aibot" element={<Aibot/> } />
        <Route path="roadmap" element={<Roadmap/>} />
        <Route path="resources" element={<Resources/>} />
        <Route path="market" element={<Market/>} />
        <Route path="contact" element={<Contact/>}/>
        <Route path="profile" element={
          <ProtectedRoute>
            <Profile/>
          </ProtectedRoute>
        } />
        <Route path="about" element={<About/>} />
        <Route path="sellitem" element={
          <ProtectedRoute>
            <Sellitem/>
          </ProtectedRoute>
        } />
        <Route path="admin" element={<Admin/>} />
        <Route path="deletedata" element={<Delete/>} />
        <Route path="updatedata" element={<Update/>} />
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>} />
        <Route path="product/:id" element={<Checkout/>} />
        <Route path='BuyProduct' element={<ProductBuy/>}/>
        <Route path='orderPop' element={<OrderPop/>} />
        <Route path='orders' element={<OrdersPage/>} />
        <Route path='allorders' element={<AllOrders/>} />
        </Route>
      </Routes>
      <ToastContainer/>
    </Router>
    </AuthContextProvider>
  )
}

export default App