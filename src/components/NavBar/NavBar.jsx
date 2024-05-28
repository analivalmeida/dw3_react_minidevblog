
import React from 'react'
import styles from './NavBar.module.css'
import { useAuthValue } from '../../context/AuthContext'
import { userAuthentication } from '../../hooks/userAuthentication'
import { NavLink, useNavigate } from 'react-router-dom'

export const NavBar = () => {
    const { user } = useAuthValue()
    const { logout } = userAuthentication()
    const navigate = useNavigate()

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to='/' className={styles.brand}>
                    MiniBlog <span>Dev</span>
                </NavLink>
                <ul className={styles.links_list}>
                    <li>
                        <NavLink to='/'
                            className={({ isActive }) => (isActive ? styles.active : null)}> Home
                        </NavLink>
                    </li>
                    {!user && (
                        <>
                            <li>
                                <NavLink to='/login'
                                    className={({ isActive }) => (isActive ? styles.active : null)}>Login
                                </NavLink>
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li>
                                <NavLink to='/home'
                                    className={({ isActive }) => (isActive ? styles.active : null)}>Ambiente
                                </NavLink>
                            </li>
                        </>
                    )}
                    {!user && (
                        <>
                            <li>
                                <button className={styles.logout} onClick={logout}>Sair</button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </>

    )
}

export default NavBar