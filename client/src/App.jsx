
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/NavBar'
import AppRoutes from './components/AppRoutes'

function App() {


  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />

      </Router>
    </>
  )
}

export default App
