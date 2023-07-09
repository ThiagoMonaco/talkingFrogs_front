'use client'
import { FC, ReactNode } from 'react'
import { UserLayoutContainer } from '@/app/user/[username]/styles'
import { Logo } from '@/components'

interface UserLayoutProps {
    children: ReactNode
}

const UserLayout: FC<UserLayoutProps> = ({children}) => {
    return (<UserLayoutContainer>
        <Logo textAnimationDelay={0.5}/>
        {children}
    </UserLayoutContainer>)
}

export default UserLayout