import styled from 'styled-components'

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 64vh;

    ::-webkit-scrollbar {
        display: none;
    }
`

export const Skeleton = styled.div`
    width: 100%;
    height: 19px;
    background-color: #313131;
    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(
            to right,
            transparent 0%,
            #656464 50%,
            transparent 100%
        );
        animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
    }
`

export const SkeletonImageWrapper = styled.div`
    width: 51px;
    height: 51px;
    padding: 16px;
    background: #313131;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SkeletonImage = styled.img`
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: rgba(78, 78, 78);
`

export const TrackSkeletonWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 51px;
    margin-bottom: 12px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const TrackImageSkeleton = styled.img`
    position: relative;
    width: 51px;
    height: 51px;
    padding: 16px;
`

export const TrackTitleSkeleton = styled(Skeleton)`
    position: relative;
    overflow: hidden;
    width: 20%;
    @media (max-width: 1890px) {
        width: 30%;
    }
`

export const TrackAuthorSkeleton = styled(Skeleton)`
    position: relative;
    overflow: hidden;
    width: 321px;
    @media (max-width: 1760px) {
        width: 280px;
    }
    @media (max-width: 1660px) {
        width: 240px;
    }
    @media (max-width: 1600px) {
        width: 140px;
    }
    @media (max-width: 1300px) {
        width: 240px;
    }
`

export const TrackAlbumSkeleton = styled(Skeleton)`
    position: relative;
    overflow: hidden;
    width: 245px;
    @media (max-width: 1600px) {
        width: 140px;
        margin: 0px 30px 0px 30px;
    }
    @media (max-width: 1300px) {
        display: none;
    }
`

export const TrackTimeSkeleton = styled(Skeleton)`
    position: relative;
    overflow: hidden;
    width: 61px;
`
