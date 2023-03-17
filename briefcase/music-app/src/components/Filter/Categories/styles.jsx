import styled from 'styled-components'

export const FilterButton = styled.div`
    position: relative;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border: ${(props) =>
        props.isActive ? '1px solid #9A48F1' : '1px solid #FFFFFF'};
    border-radius: 60px;
    padding: 6px 20px;
    color: ${(props) => (props.isActive ? '#B672FF' : '')};
    :hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
    }
    :active {
        border-color: #ad61ff;
        color: #ad61ff;
        cursor: pointer;
    }
`

export const FilterButtonCount = styled.div`
    position: absolute;
    top: -10px;
    right: -10px;
    display: ${(props) => (props.isActive ? 'block' : 'none')};
    width: 26px;
    height: 25.5px;
    text-align: center;
    color: #ffffff;
    background: #ad61ff;
    border-radius: 50%;
`
