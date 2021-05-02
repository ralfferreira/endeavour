import React from 'react';

import { Container, Content, Title, Text } from './style';

export default function AboutSection() {
  return (
    <Container id="about">
      <Content>
        <Title>
          <h1>Quem somos</h1>
        </Title>
        <Text>
          <p>
            Nossa empresa é formada por um grupo de jovens com a missão de melhorar a 
            qualidade de vida das pessoas. Esta startup nasceu a partir de um projeto 
            de TCC, no ano de 2021
          </p>
        </Text>
      </Content>
    </Container>
  );
}