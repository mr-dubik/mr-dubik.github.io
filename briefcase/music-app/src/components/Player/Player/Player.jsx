import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetTrackByIdQuery } from '../../../api/musicApi'
import Controls from '../Controls/Controls'
import Track from '../Track/Track'
import Volume from '../Volume/Volume'
import BarProgress from '../BarProgress/BarProgress'
import { getCurrentTrack } from '../../../store/slices/playerSlice'
import * as S from './styles'

export default function Player() {
    const dispatch = useDispatch()

    const currentTrackLink = useSelector(
        (state) => state.player.currentTrackLink
    )
    const isPlaying = useSelector((state) => state.player.isPlaying)
    const trackId = useSelector((state) => state.player.id)
    const isShow = useSelector((state) => state.player.showPlayer)

    const { data } = useGetTrackByIdQuery(trackId)

    const [track, setTrack] = useState(new Audio(currentTrackLink))

    if (isPlaying) {
        track.autoplay = true
    }

    useEffect(() => {
        dispatch(getCurrentTrack(data?.track_file))
    }, [data])

    useEffect(() => {
        track.pause()
        track.remove()

        setTrack(new Audio(currentTrackLink))
    }, [currentTrackLink])

    return (
        <S.ContentWrapper isPlaying={isShow}>
            <BarProgress track={track} />
            <S.PlayerBlock>
                <S.BarPlayer>
                    <Controls track={track} />
                    <Track />
                </S.BarPlayer>
                <Volume track={track} />
            </S.PlayerBlock>
        </S.ContentWrapper>
    )
}
