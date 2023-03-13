import styled from 'styled-components/native';

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.backgroundSecondary};
`

export const Container = styled.View`
  background-color: ${({theme}) => theme.background};
  flex: 1;
`;

export const Title = styled.Text``;
