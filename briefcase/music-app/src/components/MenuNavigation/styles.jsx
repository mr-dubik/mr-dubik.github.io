import styled from 'styled-components'

export const Menu = styled.div`
    display: block;
    visibility: visible;
`

export const MenuList = styled.ul`
    color: white;
    padding: 18px 0 10px 0;
`

export const MenuItem = styled.li`
    color: white;
    padding: 5px 0;
    margin-bottom: 16px;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    :hover {
        color: #d9b6ff;
    }
`

export const MenuLink = styled.a`
    color: white;
    }
`

export const Navigation = styled.section`
    width: 244px;
    background-color: #181818;
    padding: 20px 0 20px 36px;
    transition: background-color 0.5s ease;

    @media (max-width: 1470px) {
        width: 200px;
    }
    @media (max-width: 1200px) {
        width: 140px;
    }
    @media (max-width: 440px) {
        position: absolute;
        background-color: transparent;
    }
`

export const LogoNav = styled.img`
    width: 113.33px;
    height: 43px;
    padding: 13px 0 13px 0;
    background-color: transparent;
    margin-bottom: 20px;
    @media (max-width: 1200px) {
        width: 100px;
        height: 40px;
        margin-bottom: 10px;
    }
`

export const Burger = styled.div`
    width: 20px;
    height: 36px;
    padding: 13px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    :hover {
        cursor: pointer;
        transform: scale(1.1);
    }
`

export const BurgerLine = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
    transform: rotate(0);
    transition: transform 0.5s;
    &:nth-child(1) {
        transform: rotate(0);
        margin-top: 0;
        margin-right: 0;
        transition: transform 0.5s;
    }
    &:nth-child(2) {
        transform: rotate(0);
        margin-top: 0;
        transition: transform 0.5s;
    }
    &:last-child {
        display: block;
    }
`

export const BurgerClose = styled.span`
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: #d3d3d3;
    transform: rotate(90deg);
    transition: transform 0.5s;
    &:nth-child(1) {
        transform: rotate(-45deg);
        margin-top: 9px;
        margin-right: 2px;
        transition: transform 0.5s;
    }
    &:nth-child(2) {
        transform: rotate(45deg);
        margin-top: -5px;
        transition: transform 0.5s;
    }
    &:last-child {
        display: none;
    }
`
