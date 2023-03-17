import { useDispatch } from 'react-redux'
import { search } from '../../store/slices/searchSlice'
import searchIcon from '../../img/icon/search.svg'
import * as S from './styles'

export default function Search() {
    const dispatch = useDispatch()

    const onChangeHandler = (e) => {
        dispatch(search(e.target.value))
    }

    return (
        <S.SearchBlock>
            <S.SearchIcon src={searchIcon} alt="search" />
            <S.SearchInput
                onChange={onChangeHandler}
                type="search"
                placeholder="Поиск"
                name="search"
            />
        </S.SearchBlock>
    )
}
