import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import { Card, CardCurrency, CardTitle } from '~/components/Card/Card';
import { Container, Content, NewShoppingContainer, NewShoppingList, NewShoppingListText } from './styles';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
import { useI18n } from '~/hooks/useI18n';
import { FlatList } from 'react-native';
import ListItem from '~/components/ListItem/ListItem';
import Separator from '~/components/ListItem/Separator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Navigation } from '~/@types/navigation';

const DATA = [
  {
    id: 1,
    date: new Date().toLocaleString(),
    value: 2049.99
  },
  {
    id: 2,
    date: new Date().toLocaleString(),
    value: 2249.99
  },
  {
    id: 3,
    date: new Date().toLocaleString(),
    value: 1449.79
  },
  {
    id: 4,
    date: new Date().toLocaleString(),
    value: 299.39
  },
  {
    id: 5,
    date: new Date().toLocaleString(),
    value: 199.39
  },
  {
    id: 6,
    date: new Date().toLocaleString(),
    value: 549.69
  },
  {
    id: 7,
    date: new Date().toLocaleString(),
    value: 1299.19
  },
]

function Home({navigation}: Navigation) {
  const { t } = useI18n()
  const theme = useTheme()

  const goToCreateList = () => (
    navigation.navigate('Create List')
  )

  return (
    <>
      <Container>
        <Content>
          <Card height={100} width={50}>
            <CardTitle
              title='Última compra:'
            />
            <CardCurrency value={200.99} />
          </Card>
          <Card height={100} width={50}>
            <CardTitle
              title='Último mês:'
              icon={<Ionicons name="caret-up" size={20} color={theme.success} />}
            />
            <CardCurrency value={2170.99} />
          </Card>
          <Card>
            <CardTitle
              title='Últimos 6 meses: '
              icon={<Entypo name="area-graph" size={24} color={theme.primary} />}
            />
            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                  data: [
                    Math.random() * 2000,
                    Math.random() * 2000,
                    Math.random() * 2000,
                    Math.random() * 2000,
                    Math.random() * 2000,
                    Math.random() * 2000
                  ]
                }]
              }}
              yAxisLabel={t('number.currency.format.unit')}
              width={Dimensions.get('window').width - 64}
              withVerticalLines={false}
              withHorizontalLines={false}
              height={220}
              chartConfig={{
                backgroundColor: theme.primary,
                backgroundGradientFrom: theme.background,
                backgroundGradientTo: theme.primary,
                color: () => theme.white,
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: theme.background
                },
                decimalPlaces: 0
              }}
              bezier
              style={{
                borderRadius: 8,
                marginTop: 16,
              }}
            />
          </Card>
          <Card>
            <CardTitle
              title='Últimas compras: '
              icon={<Ionicons name="list" size={24} color={theme.primary} />}
            />
            <FlatList
              data={DATA}
              scrollEnabled={false}
              contentContainerStyle={{
                paddingTop: 16,
              }}
              ItemSeparatorComponent={() => <Separator />}
              renderItem={({ item }) => (
                <ListItem item={item}/>
              )}
            />
          </Card>
        </Content>
      </Container>
      <NewShoppingContainer>
        <NewShoppingList onPress={goToCreateList}>
          <Entypo name="add-to-list" size={24} color={theme.white} />
          <NewShoppingListText>Novas compras</NewShoppingListText>
        </NewShoppingList>
        <SafeAreaView edges={['bottom']} />
      </NewShoppingContainer>
    </>
  );
}

export default Home;
