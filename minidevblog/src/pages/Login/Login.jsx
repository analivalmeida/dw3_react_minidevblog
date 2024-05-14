import React from 'react'
import styles from './Login.css'
import { useState, useEffect } from 'react'
import { useSAuthentication, userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error: authError, loading } = userAuthentication()
    const navigate = useNavigate()

  return (
    <div>Login</div>
  )
}

export default Login
