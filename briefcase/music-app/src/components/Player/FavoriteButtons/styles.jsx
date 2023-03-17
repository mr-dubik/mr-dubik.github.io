import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 26%;
`

export const LikeButton = styled.div`
    padding: 5px;
    fill: transparent;
    stroke: #ffffff;
    cursor: pointer;
`

export const LikeIconWrapper = styled.div`
    width: 14px;
    height: 12px;
    color: #696969;
    :active {
        fill: #696969;
        cursor: pointer;
        color: #696969;
    }
    :hover {
        cursor: pointer;
        color: #acacac;
    }
`

export const DislikeButton = styled(LikeButton)`
    margin-left: 28.5px;
`
