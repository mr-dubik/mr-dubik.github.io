/* eslint-disable camelcase */
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PlaylistItem from '../PlaylistItem/PlaylistItem'
import { useGetPlaylistByIdQuery } from '../../../api/musicApi'
import { clearTracksId, getTracksId } from '../../../store/slices/playerSlice'
import { getPlaylistName } from '../../../store/slices/playlistSlice'
import formatDuration from '../../../utils/formatDuration'
import {
    getFavoriteTracks,
    checkFavoriteTrack,
} from '../../../utils/getFavoriteTracks'
import TrackSkeletons from '../../TrackSkeletons/TrackSkeletons'
import * as S from './styles'

export default function SelectPlaylistContent({ playlistId }) {
    const dispatch = useDispatch()

    const { data, isLoading, isSuccess } = useGetPlaylistByIdQuery(playlistId)

    const trackTitle = useSelector((state) => state.search.searchValue)

    useEffect(() => {
        dispatch(clearTracksId())
        data?.items.map((track) => dispatch(getTracksId(track.id)))
    }, [data])

    useEffect(() => {
        if (isSuccess) {
            dispatch(getPlaylistName(data.name))
        }
    }, [playlistId, data])

    if (isLoading) {
        return <TrackSkeletons />
    }

    if (isSuccess) {
        return (
            <S.PlaylistContent>
                {data?.items
                    .filter(({ name }) =>
                        name.toLowerCase().includes(trackTitle)
                    )
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
                                    getFavoriteTracks(data.items)
                                )}
                            />
                        )
                    )}
            </S.PlaylistContent>
        )
    }
    return <S.PlaylistContent />
}
