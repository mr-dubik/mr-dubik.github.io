import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import Categories from '../Categories/Categories'
import FilterItem from '../FilterItem/FilterItem'
import FilterItemYears from '../FilterItemYears/FilterItemYears'
import {
    addFilterByAuthor,
    addFilterByGenre,
    deleteAuthors,
    deleteGenres,
} from '../../../store/slices/filterSlice'
import * as S from './styles'

export default function Filter() {
    const dispatch = useDispatch()

    const genres = useSelector((state) => state.filter.genres)
    const authors = useSelector((state) => state.filter.authors)

    const filteredByYear = useSelector((state) => state.filter.filteredByYear)
    const filteredByGenre = useSelector((state) => state.filter.filteredByGenre)
    const filteredByAuthor = useSelector(
        (state) => state.filter.filteredByAuthor
    )
    const genresValue = useSelector((state) => state.filter.filterGenresValue)
    const authorsValue = useSelector((state) => state.filter.filterAuthorsValue)

    const [isActive, setActive] = useState(null)

    const onAddGenre = (e) => {
        if (!e.target.checked) {
            dispatch(deleteGenres(e.target.value))
        } else {
            dispatch(addFilterByGenre(e.target.value))
        }
    }

    const onAddAuthor = (e) => {
        if (!e.target.checked) {
            dispatch(deleteAuthors(e.target.value))
        } else {
            dispatch(addFilterByAuthor(e.target.value))
        }
    }

    return (
        <S.FilterWrapper>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'author' : null
                    )
                }
            >
                <Categories
                    text="исполнителю"
                    isActive={filteredByAuthor}
                    count={String(authorsValue.length)}
                />
                <S.AuthorWrapper isActive={isActive}>
                    <S.FilterItems>
                        {authors
                            .filter(
                                (item, pos) => authors.indexOf(item) === pos
                            )
                            .map((item) => (
                                <FilterItem
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddAuthor}
                                />
                            ))}
                    </S.FilterItems>
                </S.AuthorWrapper>
            </S.ButtonWrapper>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'year' : null
                    )
                }
            >
                <Categories
                    text="году выпуска"
                    isActive={filteredByYear}
                    count="1"
                />
                <S.YearWrapper isActive={isActive}>
                    <FilterItemYears />
                </S.YearWrapper>
            </S.ButtonWrapper>
            <S.ButtonWrapper
                onClick={() =>
                    setActive((prevState) =>
                        prevState === null ? 'genre' : null
                    )
                }
            >
                <Categories
                    text="жанру"
                    isActive={filteredByGenre}
                    count={String(genresValue.length)}
                />
                <S.GenreWrapper isActive={isActive}>
                    <S.FilterItems>
                        {genres
                            .filter((item, pos) => genres.indexOf(item) === pos)
                            .map((item) => (
                                <FilterItem
                                    key={item}
                                    value={item}
                                    onClickFunction={onAddGenre}
                                />
                            ))}
                    </S.FilterItems>
                </S.GenreWrapper>
            </S.ButtonWrapper>
        </S.FilterWrapper>
    )
}
