import styles from './NavBar.module.css'
import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { userAutentication } from '../../hooks/userAutentication'

export const Navbar = () => {
    
    const { user } = useAuthValue()
    const { logout } = userAutentication()

    return (
        <>
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <a href="/">Home</a>
                {
                    !user && ( <a href="login">Login</a>)
                }
                {
                    user && ( <a href="/" onClick={logout}>Logout</a>)
                }
            </div>
        </nav>
        </>
    )
}