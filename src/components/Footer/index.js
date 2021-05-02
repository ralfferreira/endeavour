import React from 'react';

import { HiOutlineMail } from 'react-icons/hi';

import { Container } from './style';

export default function Footer(){
  return (
    <Container>
      <HiOutlineMail size={36} />
      <p>projetoendeavourtcc@gmail.com</p>
      <p>|</p>
      <p>Endeavour © 2021</p>
    </ Container>
  )
}