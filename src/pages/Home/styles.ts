import { darken } from 'polished';
import styled from 'styled-components/native';
import { fontScale } from '~/utils/fontScale';

export const Container = styled.ScrollView`
  background-color: ${({theme}) => theme.background};
  flex: 1;
  `;

export const Content = styled.View`
  flex: 1;
  padding: 16px;
  flex-direction: row;
  gap: 16px;
  flex-wrap: wrap;
  padding-bottom: 120px;
`

export const NewShoppingContainer = styled.View`
  position: absolute;
  bottom: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NewShoppingList = styled.TouchableOpacity`
  flex-direction: row;
  padding: 8px;
  width: 80%;
  border-radius: 24px;
  margin: 16px auto;
  background-color: ${({theme}) => darken(0.1, theme.primary)};
  align-items: center;
  justify-content: center;
  gap: 16px;
  elevation: 5;
  shadow-opacity: 0.5;
  shadow-radius: 8px;
  shadow-color: #000;
  shadow-offset: 0px 8px;
`

export const NewShoppingListText = styled.Text`
  color: ${({theme}) => theme.white};
  font-weight: bold;
  font-size: ${fontScale(20)}px;
`
