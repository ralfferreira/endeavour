import styled from 'styled-components';

import BackgroundImg from '../../assets/VisionBackgroundImg.png';

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background: none;
  }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.div`
  h1 {
    color: #A629E7;
    text-align: center;
    font-size: 72px;
    font-weight: bold;
    margin-top: 150px;
    margin-bottom: 50px;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    font-size: 65px;
  }
`

export const Text = styled.div`
  max-width: 800px;

  p {
    text-align: center;
    font-size: 54px;
    font-weight: 300;
  }

  @media screen and (max-width: 1024px) {
    margin: 0;
    p {
        font-size: 40px;
        text-align: center;
        padding: 0 20px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    max-width: 600px;

    p {
      font-size: 40px;
    }
  }
`