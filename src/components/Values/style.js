import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: stretch;
  height: 100vh;
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
`;

export const Title = styled.div`
  margin-top: 150px;
  margin-bottom: 20px;

  h1 {
    font-size: 72px;
    font-weight: bold;
    line-height: 80px;
    align-items: left;
    text-align: left;

    color: #A629E7;
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
    font-size: 36px;
    line-height: 60px;
    padding: 0 90px;
  }
`;