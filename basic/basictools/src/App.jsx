import './App.css'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Form from './components/Form/Form'
import FormHooks from './components/Hooks/FormHooks'
import ConditionalRender from './components/ConditionalRender/ConditionalRender'
import ShowUserName from './components/ShowUserName/ShowUserName'
import { useState } from 'react'

function App() {
  const [users, setUser] = useState([
    {active: true, userName: 'Ana'},
    {active: true, userName: 'Lívia'},
    {active: false, userName: 'Palma'},
    {active: true, userName: 'Almeida'}
  ])
  return (
    <>
      <NavBar></NavBar>
      <Form></Form>
      <Footer></Footer>
      <FormHooks></FormHooks>
      <ConditionalRender></ConditionalRender>
      <ShowUserName list={users}></ShowUserName>
    </>
  )
}

export default App

