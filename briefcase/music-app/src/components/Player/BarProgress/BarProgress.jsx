/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-globals */
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { play } from '../../../store/slices/playerSlice'
import * as S from './styles'

export default function BarProgress({ track }) {
    const dispatch = useDispatch()

    const isPlaying = useSelector((state) => state.player.isPlaying)

    const [trackProgress, setTrackProgress] = useState(0)

    const progressBarInterval = useRef(null)
    const { duration } = track

    const progressByPercent = (trackProgress / duration) * 100

    const clearProgressBarInterval = () => {
        if (typeof progressBarInterval.current === 'number') {
            clearInterval(progressBarInterval.current)
        }
    }
    const startProgressTimer = () => {
        clearProgressBarInterval()

        progressBarInterval.current = setInterval(() => {
            setTrackProgress(track.currentTime)
            if (track.ended) {
                dispatch(play(false))
            }
        }, 1000)
    }

    const onThumbChange = (e) => {
        clearProgressBarInterval()
        track.currentTime = Number(e.target.value)
        setTrackProgress(Number(e.target.value))
        startProgressTimer()
    }
    if (isPlaying) {
        startProgressTimer()
    }

    return (
        <S.BarProgress
            type="range"
            step="1"
            min="0"
            max={isNaN(duration) ? '100' : `${duration}`}
            value={trackProgress}
            gradientValue={
                isNaN(progressByPercent) ? '0' : `${progressByPercent}`
            }
            onChange={onThumbChange}
        />
    )
}
