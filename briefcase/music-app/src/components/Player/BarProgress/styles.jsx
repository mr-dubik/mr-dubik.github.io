/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const BarProgress = styled.input`
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    background: linear-gradient(
        90deg,
        #57459d
            ${(props) =>
                props.gradientValue !== '' ? props.gradientValue : '0'}%,
        rgba(46, 46, 46, 1)
            ${(props) =>
                props.gradientValue !== '' ? props.gradientValue : '0'}%
    );
    cursor: pointer;
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: transparent;
        border: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        cursor: pointer;
    }
`
