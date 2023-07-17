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
}

export const UserContext = createContext<UserContextProps>({
    isLogged: false,
    setIsLogged: () => {},
    userData: {
        name: '',
        isEmailVerified: false
    },
    setUserData: () => {},
    logOutUser: () => {}
})

export const UserProvider = ({ children }) => {
    const router = useRouter()
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState<UserDataContextProps>({
        name: '',
        isEmailVerified: false
    })

    useEffect(() => {
        api.getUserDataByToken().then((res) => {
            if(res.status !== 200) {
                return
            }
            setUserData({
                name: res.data.name,
                email: res.data.email,
                isEmailVerified: true
            })

            setIsLogged(true)
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
        <UserContext.Provider value={{ logOutUser, isLogged, setIsLogged, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}