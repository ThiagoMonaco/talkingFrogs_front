'use client'
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import api from '@/infra/api/api'

interface UserDataContextProps {
    name: string
    email?: string
    isEmailVerified: boolean
}

interface UserContextProps {
    isLogged: boolean
    setIsLogged: (isLogged: boolean) => void
    userData: UserDataContextProps
    setUserData: (userData: UserDataContextProps) => void
    logOutUser: () => void
    isAuthorized: boolean
}

export const UserContext = createContext<UserContextProps>({
    isLogged: false,
    setIsLogged: () => {},
    userData: {
        name: '',
        isEmailVerified: false
    },
    setUserData: () => {},
    logOutUser: () => {},
    isAuthorized: false
})

export const UserProvider = ({ children }) => {
    const router = useRouter()
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState<UserDataContextProps>({
        name: '',
        isEmailVerified: false
    })
    const [isAuthorized, setIsAuthorized] = useState(false)

    useEffect(() => {
        setIsAuthorized(userData.isEmailVerified && isLogged)
    }, [isLogged, userData.isEmailVerified])

    useEffect(() => {
        api.getUserDataByToken().then((res) => {
            if(res.status !== 200) {
                return
            }

            const { name, email, isEmailVerified } = res.data

            setUserData({
                name: name,
                email: email,
                isEmailVerified: isEmailVerified
            })

            setIsLogged(true)
            if(!isEmailVerified) {
                router.push('/auth/validate-account')
            }
        })

    }, [])

    const logOutUser = () => {
        setUserData({
            name: '',
            isEmailVerified: false,
            email: ''
        })
        setIsLogged(false)
        router.push('/')
    }

    return (
        <UserContext.Provider value={{ logOutUser, isLogged, setIsLogged, userData, setUserData, isAuthorized }}>
            {children}
        </UserContext.Provider>
    )
}