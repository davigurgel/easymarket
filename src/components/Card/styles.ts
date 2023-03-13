import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 16px;
  border-radius: 30px;
  background-color: ${({theme}) => theme.backgroundSecondary};
`

export const Title = styled.Text`
  color: ${({theme}) => theme.primary};
  font-size: 16px;
`

export const Info = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 30px;
  font-weight: bold;
`
