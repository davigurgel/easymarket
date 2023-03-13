import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.backgroundSecondary};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: 24px;
  color: ${({theme}) => theme.primary};
`

export const Profile = styled.View`
  padding: 4px;
  border: solid 2px ${({theme}) => theme.primary};
  border-radius: 32px;
`

export const Avatar = styled.View`
  width: 32px;
  height: 32px;
  background-color: ${({theme}) => theme.backgroundGray};
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`

export const AvatarText = styled.Text`
  color: ${({theme}) => theme.gray};
  font-size: 16px;
  font-weight: bold;
`
