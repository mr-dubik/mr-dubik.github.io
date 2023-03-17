import styled from 'styled-components'

export const SidebarItem = styled.div`
    position: relative;
    width: 250px;
    height: 150px;
    background-color: #313131;
    overflow: hidden;
    cursor: pointer;
    @media (max-height: 960px) {
        width: 200px;
        height: 120px;
    }
    @media (max-height: 690px) {
        width: 180px;
        height: 100px;
    }
`

export const SidebarImage = styled.img`
    width: 100%;
    height: auto;
    :hover {
        transform: scale(1.09);
    }
`

export const Skeleton = styled.div`
    width: 100%;
    height: auto;
`
