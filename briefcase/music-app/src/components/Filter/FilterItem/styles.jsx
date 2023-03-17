import styled from 'styled-components'

export const FilterItem = styled.input`
    color: #ffffff;
    display: none;
    &:hover {
        color: #b672ff;
        text-decoration: underline #b672ff;
    }
    :checked + label {
        color: #b672ff;
    }
`

export const FilterItemsLabel = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FilterLabel = styled.label`
    margin-left: 10px;
    margin-right: 19px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #ffffff;

    :hover {
        cursor: pointer;
        color: #b672ff;
        text-decoration: underline;
    }
`
