import styled from 'styled-components/native';
import { fontScale } from '~/utils/fontScale';

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({theme}) => theme.backgroundSecondary};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
`

export const InfoContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  justify-content: center;
`

export const ActionButton = styled.TouchableOpacity`
`

export const TextContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${fontScale(24)}px;
  color: ${({theme}) => theme.primary};
`

export const Subtitle = styled(Title)`
  font-size: ${fontScale(12)}px;
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
  font-size: ${fontScale(16)}px;
  font-weight: bold;
`

export const SafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.backgroundSecondary};
`
