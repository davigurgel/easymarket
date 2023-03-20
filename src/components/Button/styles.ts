import styled from "styled-components/native"
import { darken } from "polished"

import { fontScale } from "~/utils/fontScale"

export const ButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px;
  width: 100%;
  border-radius: 8px;
  background-color: ${({theme}) => darken(0.1, theme.primary)};
  align-items: center;
  justify-content: center;
`

export const ButtonLabel = styled.Text`
  color: ${({theme}) => theme.white};
  font-weight: bold;
  font-size: ${fontScale(20)}px;
`
