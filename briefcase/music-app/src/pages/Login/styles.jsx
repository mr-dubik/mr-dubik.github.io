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
    margin: 15px 0px 20px;

    :not(:last-child) {
        margin-bottom: 10px;
    }

    ::placeholder {
        color: rgb(123 120 120);
    }
`

export const SignupButton = styled.button`
    width: 278px;
    height: 52px;
    font-family: 'StratosSkyeng', serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.05px;
    background-color: transparent;
    border: 1px rgb(123 120 120) solid;
    border-radius: 6px;
    cursor: pointer;
`

export const Logo = styled.img`
    width: 140px;
    height: 21px;
    margin-bottom: 24px;
    background-color: transparent;
`
