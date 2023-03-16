import React from 'react';
import { Container, Info, Title, TitleContainer } from './styles';
import { useI18n } from '~/hooks/useI18n';
import { Dimensions } from 'react-native';

const widthWindow = Dimensions.get('screen').width

type CardProps = {
  height?: number,
  /**
   * This value is used in percentage
   * @default 100
   * @example 50
   * The percentage will be 50%
   */
  width?: number,
  children: React.ReactNode
}

export const Card = ({height, width = 100, children}: CardProps) => {
  const widthCardCalc = () => {
    if (width === 100) {
      return widthWindow - 32
    }

    return ((widthWindow-48)/100) * width
  }

  return (
    <Container height={height} width={widthCardCalc()}>
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
