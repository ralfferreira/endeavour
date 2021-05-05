import backgroundImg from '../../assets/background-img-mission.png'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    background: #FFF url(${backgroundImg}) no-repeat right;
    
    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
        background: none;
    }
`

export const Content = styled.div`
    width: 100%;
    max-width: 800px;
    margin-left: 80px;

    h1{
        font-size: 72px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #A629E7;
    }

    p{
        font-weight: 300;
        font-size: 50px;
        display: flex;
        text-align: left;
    }

    @media screen and (max-width: 1024px) {
        margin: 0;
        p {
            font-size: 35px;
            text-align: center;
            padding: 0 20px;
        }
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
        margin-left: 40px;
        max-width: 600px;
        h1 {
            font-size: 65px;
        }

        p {
            font-size: 40px;
        }
    }
`