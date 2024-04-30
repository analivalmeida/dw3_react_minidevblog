import { db } from '../firebase/config'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth'
import { useState, useEffect } from 'react'


export const userAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }

    const login = async (data) => {
        checkIfIsCancelled()

        setLoading(true)
        setError(false)

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
            return true;
        } catch (error) {
            console.error(error.message)

            if (error.message.includes("invalid-login-credentials")) {
                setError("Usuário não cadastrado!")
            } else if (error.message.includes("wrong-password") || error.message.includes("invalid-credential")) {
                setError("Credenciais inválidas")
            } else {
                setError("Erro inesperado, tente novamente mais tarde")
            }

            setLoading(false)
            return false;
        }
    }

    const logout = () => {
        checkIfIsCancelled()
        signOut(auth)
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login
    }
}

async function createUser(data) {

}



