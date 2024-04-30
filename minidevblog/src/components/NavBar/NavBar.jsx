import styles from './NavBar.module.css'
import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'

export const NavBar = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()

    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.logo}>
                    <a href='#'>Blog Dev</a>
                </div>
                <div className={styles.links}>
                    <a href='/'>Home</a>
                    {
                        !user && (<a href='/login'>Login</a>)
                    }
                    {
                        user && (<a href='/' onClick={logout}>Logout</a>)
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar