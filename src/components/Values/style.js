import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  height: 100vh;

  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 100px 0;

  img {
    position: relative; 
    width: 600px;
    height: 600px;
  }

  @media screen and (max-width: 1024px) {
    padding: 0;
    justify-content: center;

    img {
      margin-top: 50px;
      width: 100%;
      height: 10%;
    }
  }
`;

export const Title = styled.div`
  margin-top: 100px;
  margin-bottom: 20px;

  h1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 80px;
    text-align: left;
    color: #A629E7;

    @media screen and (max-width: 1024px) {
      line-height: 0;
      text-align: center;
      margin-top: 400px;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      margin-top: 120px;
    }
  }
`;

export const Words = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;

  p {
    font-weight: 300;
    font-size: 32px;
    line-height: 60px;
    padding: 0 90px;
  }

  @media screen and (max-width: 1024px) {
    display: flex;
    width: 100%;
    height: 30%;
    flex-direction: column;

    p {
      padding: 0;
      flex-wrap: none;
      font-size: 22px;
    }
  }
`;