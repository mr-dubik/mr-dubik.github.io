/* eslint-disable no-alert */
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useUserSignupMutation } from '../../api/musicApi'
import logo from '../../img/logo_modal.png'
import * as S from './styles'

export default function Signup() {
    const [signup, { isSuccess, error }] = useUserSignupMutation()

    const [userValues, setUserValues] = useState({
        username: '',
        email: '',
        password: '',
    })

    const [validatePassword, setValidatePassword] = useState('')

    const onSignup = (e) => {
        e.preventDefault()

        if (userValues.password === validatePassword) {
            signup(userValues)
        } else {
            alert('Пароли не совпадают')
        }
    }

    const handleLoginChange = (e) => {
        setUserValues({
            ...userValues,
            username: e.target.value,
        })
    }

    const handleEmailChange = (e) => {
        setUserValues({
            ...userValues,
            email: e.target.value,
        })
    }

    const handlePasswordChange = (e) => {
        setUserValues({
            ...userValues,
            password: e.target.value,
        })
    }

    const handleValidatePasswordChange = (e) => {
        setValidatePassword(e.target.value)
    }

    return (
        <S.Container>
            <S.FormWrapper>
                <S.Form>
                    <S.Logo src={logo} alt="logo" />
                    <S.Input
                        placeholder="Имя"
                        type="text"
                        onChange={handleLoginChange}
                    />
                    {error && error.data.username && (
                        <S.ErrorNameMessage>
                            {error.data.username[0]}
                        </S.ErrorNameMessage>
                    )}
                    <S.Input
                        placeholder="Email"
                        type="text"
                        onChange={handleEmailChange}
                    />
                    {error && error.data.email && (
                        <S.ErrorEmailMessage>
                            {error.data.email[0]}
                        </S.ErrorEmailMessage>
                    )}
                    <S.Input
                        placeholder="Пароль"
                        type="password"
                        onChange={handlePasswordChange}
                    />
                    {error && error.data.password && (
                        <S.ErrorPasswordMessage>
                            {error.data.password[0]}
                        </S.ErrorPasswordMessage>
                    )}
                    <S.Input
                        placeholder="Повторите пароль"
                        type="password"
                        onChange={handleValidatePasswordChange}
                    />
                    <S.FormButton onClick={(e) => onSignup(e)}>
                        Зарегистрироваться
                    </S.FormButton>
                    {isSuccess && <Navigate to="/login" replace />}
                </S.Form>
            </S.FormWrapper>
        </S.Container>
    )
}
