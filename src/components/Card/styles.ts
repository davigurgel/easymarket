import styled from 'styled-components/native';

type heightProps = {
  height?: number
}

export const Container = styled.View`
  padding: 16px;
  border-radius: 15px;
  justify-content: space-between;
  background-color: ${({theme}) => theme.backgroundSecondary};
  ${({height}: heightProps) => height && `height: ${height}px;`}
`

export const TitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export const Title = styled.Text`
  color: ${({theme}) => theme.primary};
  font-size: 16px;
`

export const Info = styled.Text`
  color: ${({theme}) => theme.white};
  font-size: 24px;
  font-weight: bold;
  text-align: right;
`
