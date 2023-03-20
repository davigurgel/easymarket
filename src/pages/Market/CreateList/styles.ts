import styled from "styled-components/native";
import { Dimensions } from "react-native";
import { darken, lighten } from "polished";
import { fontScale } from "~/utils/fontScale";

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
  padding: 16px;
  position: relative;
`

export const CameraContainer = styled.View`
  position: absolute;
  flex: 1;
  top: 0;
  left: 0;
  z-index: 99;
  width: ${windowWidth}px;
  height: ${windowHeight}px;
`

export const FormContainer = styled.View`
  gap: 16px;
  margin: 16px;
`
