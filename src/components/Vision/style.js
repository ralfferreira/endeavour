import styled from 'styled-components';

import BackgroundImg from '../../assets/VisionBackgroundImg.png';

export const Container = styled.section`
  display: flex;
  height: 100vh;
  justify-content: center;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
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
`

export const Text = styled.div`
  max-width: 900px;

  p {
    text-align: center;
    font-size: 54px;
    font-weight: 300;
  }
`