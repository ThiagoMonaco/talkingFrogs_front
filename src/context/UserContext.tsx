'use client'
import { createContext, useState } from 'react'

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
    logoffUser: () => void
}

export const UserContext = createContext<UserContextProps>({
    isLogged: false,
    setIsLogged: () => {},
    userData: {
        name: '',
        isEmailVerified: false
    },
    setUserData: () => {},
    logoffUser: () => {}
})

export const UserProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState<UserDataContextProps>({
        name: '',
        isEmailVerified: false
    })

    const logoffUser = () => {
        setUserData({
            name: '',
            isEmailVerified: false,
            email: ''
        })

        setIsLogged(false)
    }

    return (
        <UserContext.Provider value={{ logoffUser, isLogged, setIsLogged, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}