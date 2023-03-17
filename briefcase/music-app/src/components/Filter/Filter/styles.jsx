import styled from 'styled-components'

export const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 51px;
    @media (max-width: 1600px) {
        margin-bottom: 40px;
    }
    @media (max-width: 1400px) {
        margin-bottom: 30px;
    }
`

export const FilterTitle = styled.div`
    margin-right: 15px;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
`

export const ButtonWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const AuthorWrapper = styled.div`
    display: ${(props) => (props.isActive === 'author' ? 'block' : 'none')};
    position: absolute;
    z-index: 20;
    top: 50px;
    width: 248px;
    height: 305px;
    padding: 34px;
    border: 1px #313131 solid;
    background: #313131;
    border-radius: 12px;
`

export const GenreWrapper = styled(AuthorWrapper)`
    display: ${(props) => (props.isActive === 'genre' ? 'block' : 'none')};
`

export const YearWrapper = styled.div`
    display: ${(props) => (props.isActive === 'year' ? 'block' : 'none')};
    position: absolute;
    z-index: 20;
    top: 50px;
    padding: 34px;
    width: 403px;
    background: #313131;
    border-radius: 12px;
    border: 1px #313131 solid;
`

export const FilterItems = styled.div`
    max-height: 237px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 28px;
    background: transparent;
    overflow-y: scroll;
    &::-webkit-scrollbar {
        width: 4px;
        height: 237px;
        background: #4b4949;
        border-radius: 10px;
    }
    &::-webkit-scrollbar-thumb {
        width: 4px;
        height: 65px;
        background: #ffffff;
        border-radius: 10px;
    }
`
