import { BrowserRouter, Routes, Route,Navigate } from 'react-router-dom'

import Home from './pages/Home';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {useAuthContext}from './hooks/useAuthContext'
function App() {
  const {user}=useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <div className='pages'>
          <Routes>
            <Route exact path='/' element={user ?<Home />:<Navigate to='/login'/>}></Route>
            <Route exact path='/signup' element={!user ?<Signup />:<Navigate to='/'/>}></Route>
            <Route exact path='/login' element={!user ?<Login />:<Navigate to='/'/>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
