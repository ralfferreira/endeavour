import React from 'react';
import Twitter from '../../assets/icon/twitter.png'
import Linkedin from '../../assets/icon/linkedin.png'
import Github from '../../assets/icon/github.png'
import { Container, Content, Title, Cards } from './style';

export default function TeamSection() {
  return (
    <Container id="team">
      <Content>
        <Title>
          <h1>Equipe</h1>
        </Title>
        <Cards>
          <div className="CardJu">
            <p>Julia Pavini</p>
            <div className="SocialMedia">
                <img src={Twitter} />
            </div>
          </div>
          <div className="CardMari">
            <p>Mariana Esteves</p>
            <div className="SocialMedia">
                <img src={Twitter} />
            </div>
          </div>
          <div className="CardTheus">
            <p>Matheus Reis</p>
            <div className="SocialMedia">
                <img src={Twitter} />
            </div>
          </div>
          <div className="CardRalf">
            <p>Ralf Ferreira</p>
            <div className="SocialMedia">
                <img src={Twitter} />
                <a href="https://github.com/ralfferreira" target="_blank"><img src={Github} /></a>
                <img src={Linkedin} />
            </div>
          </div>
          <div className="CardCaldas">
            <p>Vinícius Caldas</p>
            <div className="SocialMedia">
                <img src={Twitter} />
            </div>
          </div>
          <div className="CardVini">
            <p>Vinícius Sousa</p>
            <div className="SocialMedia">
                <img src={Twitter} />
            </div>
          </div>
        </Cards>
      </Content>
    </Container>
  )
}