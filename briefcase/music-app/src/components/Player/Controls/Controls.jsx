/* eslint-disable no-param-reassign */
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PrevIcon from '../../../img/icon/prev.svg'
import PlayIcon from '../../../img/icon/play.svg'
import PauseIcon from '../../../img/icon/pause.svg'
import NextIcon from '../../../img/icon/next.svg'
import { ReactComponent as RepeatIcon } from '../../../img/icon/repeat.svg'
import { ReactComponent as ShuffleIcon } from '../../../img/icon/shuffle.svg'
import {
    getTrackId,
    play,
    playNextTrack,
    playPrevTrack,
    repeatTrack,
    shuffleTracks,
    sortTracks,
} from '../../../store/slices/playerSlice'
import * as S from './styles'

export default function Controls({ track }) {
    const dispatch = useDispatch()

    const isPlaying = useSelector((state) => state.player.isPlaying)
    const trackIds = useSelector((state) => state.player.ids)
    const trackId = useSelector((state) => state.player.id)
    const isShuffle = useSelector((state) => state.player.isShuffle)
    const isRepeat = useSelector((state) => state.player.isRepeat)

    const onTogglePlay = () => {
        dispatch(play(!isPlaying))
    }

    const onNextTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId)
        if (currentTrack + 1 === trackIds.length) {
            dispatch(getTrackId(trackIds[0]))
            return
        }
        dispatch(playNextTrack(currentTrack))
    }

    const onPrevTrack = () => {
        const currentTrack = +trackIds.indexOf(trackId)
        if (!currentTrack) {
            dispatch(getTrackId(trackIds[0]))
            return
        }
        dispatch(playPrevTrack(currentTrack))
    }

    const onShuffle = () => {
        if (isShuffle) {
            dispatch(sortTracks())
        } else {
            dispatch(shuffleTracks())
        }
    }

    const onRepeat = () => {
        track.loop = true
        dispatch(repeatTrack())
    }

    useEffect(() => {
        if (isPlaying) {
            track.play()
        } else {
            track.pause()
        }
    }, [isPlaying])

    return (
        <S.ControlsWrapper>
            <S.PlayerButton onClick={onPrevTrack}>
                <S.PrevIconWrapper>
                    <img src={PrevIcon} alt="prev" />
                </S.PrevIconWrapper>
            </S.PlayerButton>
            <S.PlayerButton onClick={onTogglePlay}>
                {isPlaying ? (
                    <S.PlayIconWrapper>
                        <img src={PauseIcon} alt="pause" />
                    </S.PlayIconWrapper>
                ) : (
                    <S.PlayIconWrapper>
                        <img src={PlayIcon} alt="play" />
                    </S.PlayIconWrapper>
                )}
            </S.PlayerButton>
            <S.PlayerButton onClick={onNextTrack}>
                <S.NextIconWrapper>
                    <img src={NextIcon} alt="next" />
                </S.NextIconWrapper>
            </S.PlayerButton>
            <S.PlayerButton onClick={onRepeat}>
                <S.RepeatIconWrapper isRepeat={isRepeat}>
                    <RepeatIcon aria-label="repeat" />
                </S.RepeatIconWrapper>
            </S.PlayerButton>
            <S.PlayerButton onClick={onShuffle}>
                <S.ShuffleIconWrapper isShuffle={isShuffle}>
                    <ShuffleIcon aria-label="shuffle" />
                </S.ShuffleIconWrapper>
            </S.PlayerButton>
        </S.ControlsWrapper>
    )
}
