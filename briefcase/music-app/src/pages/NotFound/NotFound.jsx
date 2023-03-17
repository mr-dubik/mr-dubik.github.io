import { useNavigate } from 'react-router-dom'
import Search from '../../components/Search/Search'
import smile from '../../img/smile_crying.png'
import * as S from './styles'

export default function NotFound() {
    const navigate = useNavigate()

    const handleBackToTracks = () => {
        navigate('/tracks')
    }

    return (
        <S.NotFoundWrapper>
            <S.CenterBlockContent>
                <Search />
                <S.NotFoundBlock>
                    <S.NotFoundTitle>404</S.NotFoundTitle>
                    <S.SmileWrapper>
                        <S.NotFoundText>Страница не найдена</S.NotFoundText>
                        <S.Smile src={smile} alt="smile" />
                    </S.SmileWrapper>
                    <S.NotFoundDescription>
                        Возможно, она была удалена или перенесена на другой
                        адрес
                    </S.NotFoundDescription>
                    <S.NotFoundButton
                        type="button"
                        onClick={handleBackToTracks}
                    >
                        Вернуться на главную
                    </S.NotFoundButton>
                </S.NotFoundBlock>
            </S.CenterBlockContent>
        </S.NotFoundWrapper>
    )
}
