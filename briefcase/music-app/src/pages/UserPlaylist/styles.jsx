import styled from 'styled-components'

export const CenterBlock = styled.div`
    width: auto;
    flex-grow: 3;
    padding: 20px 40px 20px 40px;
`

export const CenterBlockContent = styled.section`
    display: flex;
    flex-direction: column;
    @media (max-height: 1280px) {
        max-height: 90%;
    }
`

export const CenterBlockTitle = styled.h2`
    margin-bottom: 45px;
    font-style: normal;
    font-weight: 400;
    font-size: 64px;
    line-height: 72px;
    letter-spacing: -0.8px;
    color: #ffffff;
`

export const TitleWrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const PlaylistTitles = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    color: rgba(105, 105, 105);
    text-transform: uppercase;
`

export const TitleTrack = styled(PlaylistTitles)`
    width: 38%;
`

export const TitleAuthor = styled(PlaylistTitles)`
    width: 321px;
`

export const TitleAlbum = styled(PlaylistTitles)`
    width: 245px;
`

export const TitleTime = styled.div`
    width: 60px;
    text-align: end;
`

export const WatchIcon = styled.img`
    width: 12px;
    height: 17px;
    color: rgba(105, 105, 105);
    background-color: transparent;
`
