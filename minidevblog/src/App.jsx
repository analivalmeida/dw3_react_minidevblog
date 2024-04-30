import './App.css'
import { BrowserRouter, Routes, Route, Navigate, Form } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { userAuthentication } from './hooks/userAuthentication'
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Login } from './pages/Login/Login'
import { Home } from './pages/Home/Home'
import { Posts } from './pages/Posts/Posts'

function App(){
  const [user, setUser] = useState(undefined)
  const { auth } = userAuthentication()

  useEffect(() => {
    onAuthStateChanged(auth, user => { setUser(user) })
  }, [auth])

  if (user === undefined) {
    return <div></div>
  }

  return(
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Header />
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/posts' element={<Posts />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App