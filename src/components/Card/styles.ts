import styled from 'styled-components/native';
import { fontScale } from '~/utils/fontScale';

type SizeProps = {
  height?: number
  width?: number
}

export const Container = styled.View<SizeProps>`
  padding: 16px;
  border-radius: 15px;
  justify-content: space-between;
  background-color: ${({theme}) => theme.backgroundSecondary};
  width: ${({width}) => width}px;
  ${({height}) => height && `height: ${height}px;`};
`

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.primary};
  font-size: ${fontScale(16)}px;
`

export const Info = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: ${fontScale(24)}px;
  font-weight: bold;
  text-align: right;
`
