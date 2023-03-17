import * as S from './styles'

export default function FilterItem({ value, onClickFunction }) {
    return (
        <S.FilterItemsLabel htmlFor="filter">
            <S.FilterItem
                id={value}
                name="filter"
                type="checkbox"
                value={value}
                onClick={onClickFunction}
            />
            <S.FilterLabel htmlFor={value}>{value}</S.FilterLabel>
        </S.FilterItemsLabel>
    )
}
