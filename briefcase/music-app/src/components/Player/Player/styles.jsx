import styled from 'styled-components'

export const ContentWrapper = styled.div`
    position: absolute;
    bottom: ${(props) => (props.isPlaying ? '0' : '-100%')};
    left: 0;
    width: 100%;
    background-color: #181818;
    transition: background-color, bottom 0.5s ease;
`

export const PlayerBlock = styled.div`
    height: 73px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BarPlayer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`
