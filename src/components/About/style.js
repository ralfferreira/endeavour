import styled from 'styled-components';

import BackgroundImg from '../../assets/AboutBackgroundImg.png';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${BackgroundImg}) no-repeat left;

  @media screen and (max-width: 1024px) {
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      background: none;
    }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    width: 100%;
  }
`;

export const Title = styled.div`
  margin-bottom: 62px;

  h1 {
    font-size: 72px;
    text-align: right;
    font-weight: bold;
    color: #A629E7;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 20px;

    h1 {
      text-align: center;
      font-size: 60px;
    }
  }

  @media (min-width: 1025px) and (max-width: 1280px) {
    h1 {
      font-size: 65px;
    }
  }
`;

export const Text = styled.div`
  margin-left: 500px;

  p {        
    font-size: 50px;
    text-align: right;
    font-weight: 300;    
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
    p {
      font-size: 40px;
      text-align: right;
    }
  }
`;