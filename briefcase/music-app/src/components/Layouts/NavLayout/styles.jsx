import styled from 'styled-components'

export const LayoutWrapper = styled.div`
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;
    transition: background-color 0.5s ease;
`

export const LayoutContainer = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: #181818;
    overflow: hidden;
    transition: background-color 0.5s ease;
`

export const Main = styled.div`
    min-height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`
