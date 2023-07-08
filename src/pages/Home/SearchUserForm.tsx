import { FC } from 'react'
import { Form, Formik } from 'formik'
import { Input, MainButton } from '@/components'
import { SearchUserFormContainerStyled } from '@/pages/Home/styles'
import { useRouter } from 'next/navigation'

export const SearchUserForm: FC = () => {
    const router = useRouter()
    const initialValues = {
        username: ''
    }

    const searchUser = (values) => {
        router.push(`/user/${values.username}`)
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={searchUser}
        >
            <Form>
                <SearchUserFormContainerStyled>
                    <div>
                        <Input
                            id={'searchUserInput'}
                            name={'username'}
                            label={'Username'}
                        />
                    </div>
                    <MainButton id={'searchUserButton'} type={'submit'}>
                        Search
                    </MainButton>
                </ SearchUserFormContainerStyled>
            </Form>
        </Formik>
    )
}