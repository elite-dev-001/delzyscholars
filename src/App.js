import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from './Header/Header'
import Home from './Pages/Home/Home'
import Courses from './Pages/Courses/Courses'
import Login from './Pages/Auth/Login'
import Register from './Pages/Auth/Register'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Error from './Pages/Error/Error'
import Footer from './Pages/Footer/Footer'
import Private from "./Pages/Auth/Private"
import Project from "./Pages/Auth/Project"
import Instructor from "./Pages/Auth/Instructor"



function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='/courses' element={ <Courses/> } />
          <Route path='/login' element={ <Login />} />
          <Route path='/register' element={ <Register />} />
          <Route path='/about' element={ <About />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/private' element={ <Private />} />
          <Route path='/project' element={ <Project />} />
          <Route path='/instructor' element={<Instructor />} />
          {/* <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} />
          <Route path='/' element={} /> */}
          <Route path='*' element={ <Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
