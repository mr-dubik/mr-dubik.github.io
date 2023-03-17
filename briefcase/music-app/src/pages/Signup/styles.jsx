import styled from 'styled-components'

export const Container = styled.div`
    max-width: 100%;
    height: 100vh;
    margin: 0 auto;
    position: relative;
    background-color: rgba(0, 0, 0, 0.85);
`

export const FormWrapper = styled.div`
    position: absolute;
    z-index: 2;
    left: calc(50% - (366px / 2));
    top: calc(50% - (439px / 2));
    opacity: 1;
`

export const Form = styled.form`
    width: 366px;
    height: 439px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 35px 40px;
    background-color: white;
    border-radius: 12px;
`

export const Input = styled.input`
    width: 278px;
    font-family: 'StratosSkyeng', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    border: 0;
    border-bottom: 1px rgb(123 120 120) solid;
    outline: none;
    padding: 8px 1px;

    :not(:last-child) {
        margin-bottom: 20px;
    }

    ::placeholder {
        color: rgb(123 120 120);
    }
`

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
    margin: 10px;
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
`

export const ErrorNameMessage = styled.span`
    color: red;
    font-size: 12px;
    text-align: center;
    position: absolute;
    max-width: 280px;
    top: 128px;
`

export const ErrorEmailMessage = styled.span`
    color: red;
    font-size: 12px;
    text-align: center;
    position: absolute;
    max-width: 280px;
    top: 190px;
`

export const ErrorPasswordMessage = styled.span`
    color: red;
    font-size: 12px;
    text-align: center;
    position: absolute;
    max-width: 280px;
    top: 250px;
`

export const Logo = styled.img`
    width: 140px;
    height: 21px;
    margin-bottom: 24px;
    background-color: transparent;
`
