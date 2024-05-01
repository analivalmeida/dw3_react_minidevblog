import './App.css'
import {BrowserRouter,Routes, Route, Navigate, Form} from 'react-router-dom'
import {AutProvider, AuthProvider} from './context/AuthContext'
import {onAuthStateChanged} from 'firebase/auth'
import { useState } from 'react'
import {userAutentication} from './hooks/userAutentication'
import { Header }  from './componentes/Header/Header' 
import { login } from './pages/Login/Login'
import { Home } from '.pages/Home/Home'
import { Posts } from '/pages/Posts/Posts'   
import { useEffect } from 'react'

function App(){
  const [user, SetUser] = useState(underfined)
  const {auth} = userAutentication()

  useEffect (() => {
    onAuthStateChanged (auth, user => {setUser(user)} )
  }, [auth])

  if (user === undefined) {
    return <div></div>
  }
  return(
    <>
  <AuthProvider value={{user}}>
    <BrowserRouter>
    <Header>
      <div classNAme='comtainer'>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/login' element={<login/>}></Route>
          <Route path='/posts' element={<Posts/>}></Route>
        </Routes>
      </div>
      </Header>
      </BrowserRouter>
  </AuthProvider>
    </>
  )
}
export default App