/* eslint-disable camelcase */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { useGetAllTracksQuery } from '../../../api/musicApi'
import { clearTracksId, getTracksId } from '../../../store/slices/playerSlice'
import { getAuthors, getGenres } from '../../../store/slices/filterSlice'
import formatDuration from '../../../utils/formatDuration'
import filterByYear from '../../../utils/filterByYear'
import {
    getFavoriteTracks,
    checkFavoriteTrack,
} from '../../../utils/getFavoriteTracks'
import TrackSkeletons from '../../TrackSkeletons/TrackSkeletons'
import * as S from './styles'

export default function Playlist() {
    const dispatch = useDispatch()

    const { data, isLoading, isSuccess } = useGetAllTracksQuery('')

    const trackTitle = useSelector((state) => state.search.searchValue)
    const filterValue = useSelector((state) => state.filter.filterYearValue)
    const genresValue = useSelector((state) => state.filter.filterGenresValue)
    const authorsValue = useSelector((state) => state.filter.filterAuthorsValue)

    useEffect(() => {
        dispatch(clearTracksId())

        if (isSuccess) {
            data?.map((track) => dispatch(getTracksId(track.id)))
            data?.map((track) => dispatch(getGenres(track.genre)))
            data?.map((track) => dispatch(getAuthors(track.author)))
        }
    }, [data])

    if (isLoading) {
        return <TrackSkeletons />
    }

    if (isSuccess) {
        return (
            <S.PlaylistContent>
                {data
                    ?.filter(({ name }) =>
                        name.toLowerCase().includes(trackTitle)
                    )
                    .filter(({ genre }) =>
                        genresValue.length ? genresValue.includes(genre) : genre
                    )
                    .filter(({ author }) =>
                        authorsValue.length
                            ? authorsValue.includes(author)
                            : author
                    )
                    .sort((a, b) => filterByYear(a, b, filterValue))
                    .map(
                        ({
                            id,
                            name,
                            author,
                            album,
                            track_file,
                            duration_in_seconds,
                        }) => (
                            <PlaylistItem
                                key={id}
                                id={id}
                                trackTitleLink={track_file}
                                trackTitleText={name}
                                trackAuthorText={author}
                                trackAlbumText={album}
                                trackTime={formatDuration(duration_in_seconds)}
                                isFavorite={checkFavoriteTrack(
                                    id,
                                    getFavoriteTracks(data)
                                )}
                            />
                        )
                    )}
            </S.PlaylistContent>
        )
    }
    return <S.PlaylistContent />
}
