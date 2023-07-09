import { FC } from 'react'
import { UserPage } from '@/pages/User/UserPage'

interface UserProps {
    params: {
        username: string
    }
}

const User: FC<UserProps> = ({params}) => {
    return <UserPage username={params.username} />
}

export default User