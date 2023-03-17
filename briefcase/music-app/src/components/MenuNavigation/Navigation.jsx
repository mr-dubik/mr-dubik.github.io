import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setLogout } from '../../store/slices/authSlice'
import * as S from './styles'
import logo from '../../img/logo.png'

export default function Navigation() {
    const [menuShown, setMenuShown] = useState(false)

    const burgerClickHandler = () => setMenuShown(!menuShown)

    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(setLogout())
        document.cookie = 'token=; max-age=-1'
        document.cookie = 'username=; max-age=-1'
    }

    return (
        <S.Navigation>
            <NavLink to="/tracks">
                <S.LogoNav src={logo} alt="logo" />
            </NavLink>
            <S.Burger onClick={burgerClickHandler}>
                {menuShown ? (
                    <>
                        <S.BurgerClose />
                        <S.BurgerClose />
                        <S.BurgerClose />
                    </>
                ) : (
                    <>
                        <S.BurgerLine />
                        <S.BurgerLine />
                        <S.BurgerLine />
                    </>
                )}
            </S.Burger>
            <S.Menu style={{ display: menuShown ? 'block' : 'none' }}>
                <S.MenuList>
                    <NavLink to="/tracks">
                        <S.MenuItem>Главная</S.MenuItem>
                    </NavLink>
                    <NavLink to="/my_playlist">
                        <S.MenuItem>Мой плейлист</S.MenuItem>
                    </NavLink>
                    <NavLink to="/login" onClick={onLogout}>
                        <S.MenuItem>Выйти</S.MenuItem>
                    </NavLink>
                </S.MenuList>
            </S.Menu>
        </S.Navigation>
    )
}
