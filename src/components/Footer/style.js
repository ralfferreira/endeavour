import styled from 'styled-components';

export const Container = styled.footer`
  background: #262626;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: #F5F5F5;
  padding: 0 300px;
  height: 142px;
  margin-top: 300px;

  p {
    font-weight: normal;
    font-size: 25px;
    line-height: 34px;
    text-align: center;
  }

  @media screen and (max-width: 1280px) {
    margin-top: 500px;
    width: 100%;
    padding: 0;

    p {
      font-size: 14px;
    }
  }
`;