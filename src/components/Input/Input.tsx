import { Ionicons } from '@expo/vector-icons';

import {
  InputButtonIcon,
  InputContainer,
  InputField,
  InputIcon,
  InputWrap,
  Label,
  LabelWrap
} from "./styles";

type InputProps = {
  label?: string,
  icon?: keyof typeof Ionicons.glyphMap,
  iconPress?: () => void,
}

const Input = ({ label, iconPress, icon }: InputProps) => {
  return (
    <InputContainer>
      {
        label && (
          <LabelWrap>
            <Label>Label</Label>
          </LabelWrap>
        )
      }
      <InputWrap>
        {
          icon
            ? (
              <>
                <InputIcon />
                <InputButtonIcon onPress={iconPress}>
                  <Ionicons name={icon} size={24} color="white" />
                </InputButtonIcon>
              </>
            )
            : (
              <InputField />
            )
        }
      </InputWrap>
    </InputContainer>
  );
}

export default Input;
