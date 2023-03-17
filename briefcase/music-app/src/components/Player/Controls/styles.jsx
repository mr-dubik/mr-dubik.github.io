import styled from 'styled-components'

export const ControlsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 34px;
`

export const PlayerButton = styled.div`
    padding: 5px;
    display: flex;
    align-items: center;
`

export const PrevIconWrapper = styled.div`
    width: 15px;
    height: 14px;
    margin-right: 23px;
    cursor: pointer;
    color: #d9d9d9;
`

export const PlayIconWrapper = styled.div`
    width: 22px;
    height: 20px;
    margin-right: 12px;
    cursor: pointer;
    color: #d9d9d9;
`

export const NextIconWrapper = styled.div`
    width: 15px;
    height: 14px;
    margin-right: 28px;
    cursor: pointer;
    color: #d9d9d9;
`

export const RepeatIconWrapper = styled.div`
    width: 18px;
    height: 12px;
    fill: transparent;
    margin-right: 24px;
    cursor: pointer;
    color: ${(props) => (props.isRepeat ? '#FFFFFF' : '#696969')};
    :hover {
        color: #acacac;
    }
    :active {
        fill: #696969;
        cursor: pointer;
        color: #696969;
    }
`

export const ShuffleIconWrapper = styled.div`
    width: 19px;
    height: 12px;
    fill: transparent;
    margin-right: 24px;
    cursor: pointer;
    color: ${(props) => (props.isShuffle ? '#FFFFFF' : '#696969')};
    :hover {
        color: #acacac;
    }
    :active {
        fill: #696969;
        cursor: pointer;
        color: #696969;
    }
`
