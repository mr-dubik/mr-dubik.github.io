import styled from 'styled-components'

export const SearchBlock = styled.div`
    width: 100%;
    border-bottom: 1px solid #4e4e4e;
    margin-bottom: 51px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media (max-width: 1600px) {
        margin-bottom: 30px;
    }
    @media (max-width: 1400px) {
        margin-bottom: 20px;
    }
`

export const SearchIcon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 5px;
    fill: transparent;
    color: #ffffff;
`

export const SearchInput = styled.input`
    flex-grow: 100;
    background-color: transparent;
    border: none;
    padding: 13px 10px 14px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    outline: none;
    &::placeholder {
        background-color: transparent;
        color: #ffffff;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
    }
`
