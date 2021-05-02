import styled from 'styled-components';

import BackgroundImg from '../../assets/AboutBackgroundImg.png';

export const Container = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${BackgroundImg}) no-repeat left;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
`;

export const Title = styled.div`
  margin-bottom: 62px;

  h1 {
    font-size: 72px;
    text-align: right;
    font-weight: bold;
    color: #A629E7;
  }
`;

export const Text = styled.div`
  margin-left: 500px;

  p {        
    font-size: 55px;
    text-align: right;
    font-weight: 300;    
  }
`;