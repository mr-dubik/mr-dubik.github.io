import { Outlet } from 'react-router-dom'
import Navigation from '../../MenuNavigation/Navigation'
import * as S from './styles'

export default function NavLayout() {
    return (
        <S.LayoutWrapper>
            <S.LayoutContainer>
                <S.Main>
                    <Navigation />
                    <Outlet />
                </S.Main>
            </S.LayoutContainer>
        </S.LayoutWrapper>
    )
}
