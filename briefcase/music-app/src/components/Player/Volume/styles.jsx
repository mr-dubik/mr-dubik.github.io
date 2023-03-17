import styled from 'styled-components'

export const VolumeWrapper = styled.div`
    width: auto;
    display: flex;
    align-items: center;
    padding: 0 92px 0 0;
`

export const VolumeContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
`

export const ImageWrapper = styled.div`
    width: 13px;
    height: 18px;
    margin-right: 17px;
`

export const VolumeIcon = styled.div`
    width: 18px;
    height: 18px;
    cursor: pointer;
    color: #d9d9d9;
`

export const ProgressWrapper = styled.div`
    width: 109px;
    display: flex;
    align-items: center;
    cursor: pointer;
`

export const ProgressLine = styled.input`
    -webkit-appearance: none;
    background: transparent;
    cursor: pointer;
    ::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
    }
    ::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #1a1a1a;
        border: 2px solid #ffffff;
        width: 13px;
        height: 13px;
        border-radius: 50%;
        cursor: pointer;
        margin-top: -6px;
    }
    ::-webkit-slider-runnable-track {
        width: 100%;
        height: 0;
        border: 2px solid #797979;
        background: #ffffff;
        border-radius: 2px;
    }
`
