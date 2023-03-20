import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  Profile,
  Avatar,
  AvatarText,
  SafeArea,
  InfoContainer,
  Subtitle,
  TextContainer,
  ActionButton
} from './styles';
import { useI18n } from '~/hooks/useI18n';

type HeaderProps = {
  hideInfo?: boolean,
  title?: string,
}

const Header = ({ hideInfo = false, title }: HeaderProps) => {
  const theme = useTheme()
  const navigation = useNavigation()
  const { t } = useI18n()

  return (
    <>
      <SafeArea />
      <Container>
        <InfoContainer>
          {
            !hideInfo && (
              <ActionButton onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color={theme.primary} />
              </ActionButton>
            )
          }
          <TextContainer>
            <Title>
              { hideInfo ? t('general.appName') : title}
            </Title>
            {
              !hideInfo && (
                <Subtitle>{ t('general.appName') }</Subtitle>
              )
            }
          </TextContainer>
        </InfoContainer>
        <Profile>
          <Avatar>
            <AvatarText>
              D
            </AvatarText>
          </Avatar>
        </Profile>
      </Container>
    </>
  );
}

export default Header;
