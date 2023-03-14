import React from 'react';

import { Container, Title, Profile, Avatar, AvatarText, SafeArea } from './styles';

const Header = () => {
  return (
    <>
      <SafeArea />
      <Container>
        <Title>Easy Market</Title>
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
