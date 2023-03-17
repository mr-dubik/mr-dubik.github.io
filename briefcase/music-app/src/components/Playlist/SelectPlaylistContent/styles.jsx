/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const PlaylistContent = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    max-height: 64vh;

    ::-webkit-scrollbar {
        display: none;
    }
`
