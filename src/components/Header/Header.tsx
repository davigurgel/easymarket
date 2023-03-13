import React from 'react';

import { Container, Title, Profile, Avatar, AvatarText } from './styles';

const Header = () => {
  return (
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
  );
}

export default Header;
