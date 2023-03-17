/* eslint-disable no-param-reassign */
import { useState } from 'react'
import VolumeIcon from '../../../img/icon/volume.svg'
import VolumeOffIcon from '../../../img/icon/volumeOff.svg'
import * as S from './styles'

export default function Volume({ track }) {
    const [isVolumeOn, setIsVolumeOn] = useState(true)
    const [volumeValue, setVolumeValue] = useState(0.2)
    const [prevVolumeValue, setPrevVolumeValue] = useState(0)

    track.volume = volumeValue

    const onVolumeChange = (e) => {
        if (!isVolumeOn) {
            setIsVolumeOn(true)
        }
        setVolumeValue(Number(e.target.value))
    }

    const onVolumeToggle = () => {
        setIsVolumeOn(!isVolumeOn)
        if (isVolumeOn) {
            setPrevVolumeValue(volumeValue)
            setVolumeValue(0)
        } else {
            setVolumeValue(prevVolumeValue)
        }
    }

    return (
        <S.VolumeWrapper>
            <S.VolumeContent>
                <S.ImageWrapper>
                    <S.VolumeIcon onClick={() => onVolumeToggle()}>
                        {isVolumeOn ? (
                            <img src={VolumeIcon} alt="volume" />
                        ) : (
                            <img src={VolumeOffIcon} alt="volume-off" />
                        )}
                    </S.VolumeIcon>
                </S.ImageWrapper>
                <S.ProgressWrapper>
                    <S.ProgressLine
                        type="range"
                        name="volume"
                        min="0"
                        max="1"
                        step="0.01"
                        value={volumeValue}
                        onChange={(e) => onVolumeChange(e)}
                    />
                </S.ProgressWrapper>
            </S.VolumeContent>
        </S.VolumeWrapper>
    )
}
