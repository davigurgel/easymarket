import React from "react";
import { ButtonContainer, ButtonLabel } from "./styles";

type ButtonProps = {
  label?: string,
  onPress: () => void,
  children?: React.ReactNode
}

const Button = ({ label, onPress, children }: ButtonProps) => {
  return (
    <ButtonContainer onPress={onPress}>
      { children }
      {
        label && (
          <ButtonLabel>{label}</ButtonLabel>
        )
      }
    </ButtonContainer>
  );
}

export default Button;
