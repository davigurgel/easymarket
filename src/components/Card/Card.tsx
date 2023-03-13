import React from 'react';
import { Container, Info, Title } from './styles';

export const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <Container>
      {children}
    </Container>
  );
}

export const CardTitle = ({title}: {title: string}) => {
  return (
    <Title>{title}</Title>
  )
}

export const CardCurrency = ({value}: {value: number}) => {
  return (
    <Info>{value}</Info>
  )
}
