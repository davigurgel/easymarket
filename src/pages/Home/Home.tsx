import React, { useState } from 'react';
import { Switch } from 'react-native';

import Header from '~/Components/Header/Header';
import { CURRENCIES } from '~/constants/currencies';
import { LANGUAGES } from '~/constants/languages';
import { useI18n } from '~/hooks/useI18n';
import { Container, Title, SafeArea } from './styles';

function Home() {
  const { t, c, setLocale, setCurrency } = useI18n()
  const [isBR, setIsBR] = useState(true)
  const [isEUR, setIsEUR] = useState(false)

  const handleLocaleChange = () => {
    setIsBR(state => !state)

    setLocale(isBR ? LANGUAGES.ptBR : LANGUAGES.enUS)
  }

  const handleCurrencyChange = () => {
    setIsEUR(state => !state)

    setCurrency(isEUR ? CURRENCIES.EUR : CURRENCIES.BRL)
  }

  return (
    <Container>
      <SafeArea />
      <Header />
      <Title style={{color: '#fff'}}>{t('general.welcome')}</Title>
      <Title style={{color: '#fff'}}>{c(2000.99)}</Title>

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isBR ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleLocaleChange}
        value={isBR}
      />

      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEUR ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleCurrencyChange}
        value={isEUR}
      />
    </Container>
  );
}

export default Home;
