import React from 'react';
import Twitter from '../../assets/icon/twitter.png'
import Linkedin from '../../assets/icon/linkedin.png'
import Github from '../../assets/icon/github.png'
import Facebook from '../../assets/icon/facebook.png'
import Instagram from '../../assets/icon/instagram.png'
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
              <a href="https://www.instagram.com/_ilotirf/?hl=pt-br" target="_blank"><img src={Instagram} /></a>
            </div>
          </div>
          <div className="CardMari">
            <p>Mariana Esteves</p>
            <div className="SocialMedia">
              <a href="https://www.instagram.com/mari_saas/" target="_blank"><img src={Instagram} /></a>
              <a href="https://github.com/Mari-Bastet" target="_blank"><img src={Github} /></a>
            </div>
          </div>
          <div className="CardTheus">
            <p>Matheus Reis</p>
            <div className="SocialMedia">
              <a href="https://www.instagram.com/theusreis__/" target="_blank"><img src={Instagram} /></a>
              <a href="https://www.linkedin.com/in/theus-reis-89b696211/" target="_blank"><img src={Linkedin} /></a>
            </div>
          </div>
          <div className="CardRalf">
            <p>Ralf Ferreira</p>
            <div className="SocialMedia">
              <a href="https://www.instagram.com/ralf_dewrich/?hl=pt-br" target="_blank"><img src={Instagram} /></a>
              <a href="https://github.com/ralfferreira" target="_blank"><img src={Github} /></a>
              <a href="https://www.linkedin.com/in/ralfferreira/" target="_blank"><img src={Linkedin} /></a>
            </div>
          </div>
          <div className="CardCaldas">
            <p>Vinícius Caldas</p>
            <div className="SocialMedia">
              <a href="https://www.facebook.com/vinicius.caldas.1656/" target="_blank"><img src={Facebook} /></a>
              <a href="https://github.com/ViniCaldas" target="_blank"><img src={Github} /></a>
            </div>
          </div>
          <div className="CardVini">
            <p>Vinícius Sousa</p>
            <div className="SocialMedia">
              <a href="https://github.com/FilosofoDeepWeb" target="_blank"><img src={Github} /></a>
            </div>
          </div>
        </Cards>
      </Content>
    </Container>
  )
}