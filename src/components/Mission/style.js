import backgroundImg from '../../assets/background-img-mission.png'
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    align-items: center;
    background: #FFF url(${backgroundImg}) no-repeat right;
`

export const Content = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-left: 80px;

    h1{
        font-size: 72px;
        font-weight: 700;
        margin-bottom: 20px;
        color: #A629E7;
    }

    p{
        font-weight: 300;
        font-size: 55px;
        display: flex;
        text-align: left;
    }
`