import React from 'react';
import { Container, Info, Title, TitleContainer } from './styles';
import { useI18n } from '~/hooks/useI18n';

type CardProps = {
  height?: number,
  children: React.ReactNode
}

export const Card = ({height, children}: CardProps) => {
  return (
    <Container height={height}>
      {children}
    </Container>
  );
}

export const CardTitle = ({title, icon}: {title: string, icon?: React.ReactNode}) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      {icon}
    </TitleContainer>
  )
}

export const CardCurrency = ({value}: {value: number}) => {
  const { c } = useI18n()
  return (
    <Info>{c(value)}</Info>
  )
}
