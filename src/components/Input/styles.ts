import styled from "styled-components/native"
import { darken, lighten } from "polished"

import { fontScale } from "~/utils/fontScale"

export const InputContainer = styled.View`
  gap: 16px;
`

export const LabelWrap = styled.View`
  border-bottom-color: ${({theme}) => theme.primary};
  border-bottom-width: 1px;
  border-bottom-style: solid;
  padding-bottom: 8px;
`

export const Label = styled.Text`
  color: ${({theme}) => theme.primary};
  font-weight: 600;
  font-size: ${fontScale(16)}px;
`

export const InputWrap = styled.View`
  flex-direction: row;
`

export const InputField = styled.TextInput`
  flex: 1;
  padding: 12px;
  background-color: ${({theme}) => lighten(0.2, theme.backgroundSecondary)};
  color: ${({theme}) => theme.white};
  border-radius: 8px;
`

export const InputIcon = styled(InputField)`
  flex: 1;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
`

export const InputButtonIcon = styled.TouchableOpacity`
  padding: 8px 12px;
  background-color: ${({theme}) => darken(0.1, theme.primary)};
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`
