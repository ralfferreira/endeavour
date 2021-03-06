import styled from 'styled-components'
import HeroImg from '../../assets/HeroSection.png'

export const HeroContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-height: 650px;
    height: 100vh;
    margin-bottom: 100px;

    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        max-height: 510px;
        margin-bottom: 150px;
    }
    
    @media (min-width: 1281px) and (max-width: 1440px) {
        max-height: 550px;
    }
`

export const HeroBackground = styled.div`
    background-image: url(${HeroImg});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 100%;
    width: 100%;
    height: 100vh;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`

export const HeroContent = styled.div`
    @keyframes colorCycle {
        0%, 55% {
            filter: brightness(0);
        }
        11%, 33% {
            filter: none;
        }
    }

    display: flex;
    color: #000;
    flex-direction: column;
    font-weight: bolder;
    justify-content: center;
    font-size: 40px;
    margin-left: 200px;

    h1:nth-child(1) {
        background-image: linear-gradient(90deg, #560F7A, #A629E7);
    }

    h1:nth-child(2) {
        background-image: linear-gradient(90deg, #560F7A, #A629E7);
        animation-delay: 4s;
    }

    h1:nth-child(3) {
        background-image: linear-gradient(90deg, #560F7A, #A629E7);
        animation-delay: 8s;
    }

    h1 {
        background-clip: text;
        color: #000;
        filter: brightness(0);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: colorCycle 12s ease-in-out infinite;
    }

    h2 {
        font-weight: 100;
        font-size: 35px;
    }

    @media screen and (max-width: 768px) {
        margin: 0;
        display: flex;
        font-weight: bolder;
        justify-content: center;
        font-size: 36px;
        height: 80vh;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin: 0;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        font-size: 32px;
        margin-left: 50px;

        h2 {
            font-size: 25px;
        }
    }
`