import * as S from './styles'

export default function Categories({ text, isActive, count }) {
    return (
        <S.FilterButton isActive={isActive}>
            <p>{text}</p>
            <S.FilterButtonCount isActive={isActive}>
                {count}
            </S.FilterButtonCount>
        </S.FilterButton>
    )
}
