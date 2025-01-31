import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
//import Home from './components/Home'
//import Cart from './components/Cart'
import Pizza from './components/Pizza'
//import Register from './components/Register'
//import Login from './components/Login'

function App() {
  return (
    <>
      <Navbar />
      {/*<Cart /> */}
      {/* <Home /> */}
      {/* <Register /> */}
      {/*<Login /> */}
      <Pizza />
      <Footer />
    </>
  )
}

export default App
