import styled from 'styled-components'

export const FormButton = styled.button`
    width: 278px;
    height: 52px;
    font-family: 'StratosSkyeng', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    color: white;
    background-color: rgba(88, 14, 162);
    border-radius: 6px;
    border: 0;
    cursor: pointer;
    margin: 50px 10px 20px;

    :hover {
        background-color: rgb(64 8 120);
    }
    :active {
        background-color: rgb(43 10 77);
    }
`

export const ErrorMessage = styled.span`
    color: red;
    font-size: 12px;
    text-align: center;
    max-width: 280px;
    position: absolute;
    top: 220px;
`
