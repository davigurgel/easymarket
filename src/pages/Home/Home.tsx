import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Card, CardCurrency, CardTitle } from '~/components/Card/Card';
import { Container, Content } from './styles';

function Home() {
  const theme = useTheme()
  const data = [
    {
      id: 1,
      title: 'Última compra:',
      value: 200.99,
    },
    {
      id: 2,
      title: 'Último mês:',
      value: 2170.99,
    },
    {
      id: 3,
      title: 'Última compra:',
      value: 2200.99,
    },
  ]
  return (
    <Container>
      <Content>
        <FlatGrid
          spacing={16}
          data={data}
          renderItem={({ item }) => (
            <Card height={100}>
              <CardTitle
                title={item.title}
                icon={
                  item.id == 2
                    ? <Ionicons name="caret-up" size={20} color={theme.success} />
                    : null
                }
              />
              <CardCurrency value={item.value} />
            </Card>
          )}
        />
      </Content>
    </Container>
  );
}

export default Home;
