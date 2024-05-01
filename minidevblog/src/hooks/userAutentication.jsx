import {db} from ".../firebase/config"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { useState, useEffect } from  "react"

export const userAutentication =()  => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const [cancelled, setCancelled] = useState(null)

    const auth = getAuth()

    function checkIFIsCancelled(){
        if(cancelled){
            return
        }
    }

    const login = async (data) => {
        checkIFIsCancelled()

        setLoading(true)
        setError(false)

        try{
            await signInWithEmailAndPassword(auth, data.email, data.passaword)
            setLoading(false)
            return true;
        }catch(error){
            console.error(error.message)

            if(error.message.includes("invalid-login-credentials")){
                setError("Usuário não cadastrado!")
            }else if(error.message.includes("wrong-password") || error.message.includes("invalid-credential")){
              setError("Credenciais inválidas!")
         
            }else{
                setError("Erro inesperado, tente novamente mais tarde.")
            }
            setLoading(false)
            return false;
            }
        }
        const logout = () => {
            checkIFIsCancelled()
            signOut(auth)
        }

        useEffect(() => {
            return () => setCancelled(true)
        }, []
        )

        return{
            auth, error, loading, login, logout 
        }
    }
