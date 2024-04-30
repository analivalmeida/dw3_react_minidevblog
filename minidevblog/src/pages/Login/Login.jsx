import React from "react";
import styles from './Login.module.css'
import { useState, useEffect } from "react";
import { userAuthentication } from '../../hooks/userAuthentication'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const { login, error: authError, loading } = userAuthentication()
    const navigate = useNavigate()

    const handlerSubmit = async (e) => {
        e.preventDefault()
        setError('')
        const user = { email, password }
        const logged = await login(user)

        if (logged) {
            navigate("/posts")
        }
    }

    useEffect(() => {
        if (authError) {
            setError(authError)
        }
    }, [authError])

    return (
        <>
            <div className={styles.container}>
                <form action="#" method="POST" className={styles.form} onSubmit={handlerSubmit}>
                    <font color='red'>{error}</font>
                    <h2>Login</h2>
                    <div className={styles.group}>
                        <label>Email</label>
                        <input type="email" id="email" name="email" placeholder="Digite seu email"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className={styles.group}>
                        <label>Senha</label>
                        <input type="password" id="password" name="password" placeholder="Digite sua senha"
                            value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        </>
    )
}