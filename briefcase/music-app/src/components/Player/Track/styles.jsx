import styled from 'styled-components'

export const TrackWrapper = styled.div`
    display: flex;
    flex-direction: row;
`

export const TrackContainer = styled.div`
    width: auto;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-areas: 'image track' 'image author';
    align-items: center;
`

export const PlayImageWrapper = styled.div`
    position: relative;
    width: 51px;
    height: 51px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    grid-area: image;
    transition: background-color 0.5s ease;
    overflow: hidden;
`

export const PlayIconImage = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    color: #4e4e4e;
`

export const TrackAuthor = styled.div`
    position: relative;
    grid-area: author;
    min-width: 49px;
    overflow: hidden;
`

export const TrackAuthorLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 24px;
    color: #ffffff;
    white-space: nowrap;
`

export const TrackName = styled.div`
    position: relative;
    grid-area: track;
    min-width: 120px;
    overflow: hidden;
`

export const TrackPlayLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #ffffff;
`
