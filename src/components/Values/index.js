import React from 'react';

import WordCloudImg from '../../assets/WordCloud.png' ;

import { Container, Content, Title, Words } from './style';

export default function ValuesSection() {
  return (
    <Container id="values">
      <Content>
        <Title>
          <h1>Valores</h1>
        </Title>
        <img src={WordCloudImg} alt="Nuvem de Palavras"/>
        <Words>
          <p>Ética</p>
          <p>Acessibilidade</p>
          <p>Transparência</p>
          <p>Igualdade à todos</p>
          <p>Busca por um mundo melhor</p>
          <p>Respeito ao meio ambiente e às pessoas</p>
        </Words>
      </Content>
    </ Container>
  )
}