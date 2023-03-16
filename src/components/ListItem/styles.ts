import { darken, lighten } from "polished";
import styled from "styled-components/native";
import { fontScale } from "~/utils/fontScale";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  background-color: ${({theme}) => lighten(0.2, theme.backgroundSecondary)};
  padding: 16px 8px;
  align-items: center;
  border-radius: 8px;
`

export const HeaderContainer = styled.View`
  align-items: flex-start;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.primary};
  font-weight: bold;
  font-size: ${fontScale(20)}px;
`

export const SubTitle = styled(Title)`
  font-size: ${fontScale(16)}px;
  font-weight: 300;
`

export const Info = styled(Title)`
  color: ${({theme}) => theme.white};
`

export const SeparatorView = styled.View`
  padding: 8px;
  align-items: center;
  justify-content: center;
`

export const SeparatorItem = styled.View`
  width: 70%;
  border: solid 1px ${({theme}) => darken(0.3, theme.primary)};
`
