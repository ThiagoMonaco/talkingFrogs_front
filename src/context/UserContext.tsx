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
}

export const UserContext = createContext<UserContextProps>({
    isLogged: false,
    setIsLogged: () => {},
    userData: {
        name: '',
        isEmailVerified: false
    },
    setUserData: () => {}
})

export const UserProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false)
    const [userData, setUserData] = useState<UserDataContextProps>({
        name: '',
        isEmailVerified: false
    })

    return (
        <UserContext.Provider value={{ isLogged, setIsLogged, userData, setUserData }}>
            {children}
        </UserContext.Provider>
    )
}