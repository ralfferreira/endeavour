import styled from 'styled-components';

import BackgroundImg from '../../assets/TeamBackground.png';
import RalfImg from '../../assets/Team_Ralf.png';
import CaldasImg from '../../assets/Team_Caldas.png';
import ViniImg from '../../assets/Team_Vini.png';
import JuliaImg from '../../assets/Team_Julia.png';
import TheusImg from '../../assets/Team_Theus.png';
import MariImg from '../../assets/Team_Mari.png';
import RalfImgDark from '../../assets/TeamRalfDark.png';
import CaldasImgDark from '../../assets/TeamCaldasDark.png';
import ViniImgDark from '../../assets/TeamViniDark.png';
import JuliaImgDark from '../../assets/TeamJuliaDark.png';
import TheusImgDark from '../../assets/TeamTheusDark.png';
import MariImgDark from '../../assets/TeamMariDark.png';

export const Container = styled.section`
  width: 100%;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 1000px;
  width: 90%;

  @media screen and (max-width: 1024px) {
    height: 100vh;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;

  h1 {
    font-weight: bold;
    font-size: 72px;
    color: #A629E7;
  }

  @media screen and (max-width: 1024px) {
      margin-bottom: 30px;
  }
`;

export const Cards = styled.div`
  display: flex;
  width: 100%;
  height: 600px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media screen and (max-width: 1024px) {
    display: flex;
    text-align: center;
    align-items: center;
    background: none;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #A629E7;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  div {
    height: 600px;
    width: 400px;
    flex-shrink: 0;
    margin-right: 50px;
    position: relative;
    display: flex;
    justify-content: center;
  
    &:hover {
      p {
        color: white;
        transition: 0.8s;
      }
    }

    p {
      margin-top: 20px;
      font-weight: bold;
      text-align: center;
      font-size: 40px;
      color: transparent;
    }

    @media screen and (max-width: 768px) {
      p {
        margin-top: 30px;
      }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      p {
        margin-top: 70px;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    div {
      margin: 0;
    }

    .CardCaldas, .CardMari, .CardRalf, .CardTheus, .CardVini {
      margin-left: 30px;
    }
  }

  .CardJu, .CardCaldas, .CardMari, .CardRalf, .CardTheus, .CardVini {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .SocialMedia {
        img {
          width: 50px;
          height: 50px;
        }
        height: 50px;
        margin-bottom: 20px;
        opacity: 0;
        display: flex;
        justify-content: space-around;
        
        @media screen and (max-width: 768px) {
          margin-bottom: 40px;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
          margin-bottom: 70px;
        }
      }

      &:hover {
        .SocialMedia {
          opacity: 1;
          transition: 0.3s;
        }
      }
  }

  .CardJu {
      background: url(${JuliaImg}) no-repeat center;
      background-size: cover;
      
      &:hover {
        background: url(${JuliaImgDark}) no-repeat center;
        background-size: cover;
        transition: 0.2s;
      }
    }

  .CardMari {
    background: url(${MariImg}) no-repeat center;
    background-size: cover;

    &:hover {
      background: url(${MariImgDark}) no-repeat center;
      background-size: cover;
      transition: 0.2s;
    }
  }
  .CardTheus {
    background: url(${TheusImg}) no-repeat center;
    background-size: cover;

    &:hover {
      background: url(${TheusImgDark}) no-repeat center;
      background-size: cover;
      transition: 0.2s;
    }
  }
  .CardRalf {
    background: url(${RalfImg}) no-repeat center;
    background-size: cover;

    &:hover {
      background: url(${RalfImgDark}) no-repeat center;
      background-size: cover;
      transition: 0.2s;
    }
  }
  .CardCaldas {
    background: url(${CaldasImg}) no-repeat center;
    background-size: cover;

    &:hover {
      background: url(${CaldasImgDark}) no-repeat center;
      background-size: cover;
      transition: 0.2s;
    }
  }
  .CardVini {
    background: url(${ViniImg}) no-repeat center;
    background-size: cover;

    &:hover {
      background: url(${ViniImgDark}) no-repeat center;
      background-size: cover;
      transition: 0.2s;
    }
  }
`;