import styled from 'styled-components'

export const Sidebar = styled.div`
    max-width: 418px;
    padding: 154px 70px 20px 70px;
    transition: right 0.5s;

    @media (max-width: 1890px) {
        position: absolute;
        background-color: #181818;
        right: 0;
    }
    @media (max-width: 1800px) {
        padding-left: 0px;
    }
    @media (max-width: 1200px) {
        padding-right: 40px;
    }
`

export const SidebarBlock = styled.div`
    height: 100%;
    padding: 200px 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media (max-height: 960px) {
        padding-top: 100px;
    }
    @media (max-height: 860px) {
        padding-top: 60px;
    }
    @media (max-height: 800px) {
        padding-top: 40px;
    }
`

export const SidebarList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    @media (max-height: 960px) {
        gap: 16px;
    }
    @media (max-height: 800px) {
        gap: 10px;
    }
`
