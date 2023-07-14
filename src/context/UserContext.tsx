'use client'
import { createContext, useState } from 'react'
import { useRouter } from 'next/navigation'

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