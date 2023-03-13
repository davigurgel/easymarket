import { createContext, useLayoutEffect, useState } from 'react';
import * as Localization from 'expo-localization';
import { I18n } from 'i18n-js';

import ptBR from '~/i18n/ptBR';
import enUS from '~/i18n/enUS';
import * as currencies from '~/i18n/Currency'
import AsyncStorage from '@react-native-async-storage/async-storage';

type LocaleProps = {
  handleSetLocale: (value :string) => void,
  handleSetCurrency: (value :string) => void,
  i18n: any
}

const i18n = new I18n();

export const LocaleContext = createContext({} as LocaleProps)

const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  let [locale, setLocale] = useState(Localization.locale);
  let [currency, setCurrency] = useState(Localization.getLocales()[0].currencyCode);

  i18n.enableFallback = true;
  i18n.translations = {
    'pt-BR': { ...ptBR, ...currencies[currency as never] as Record<string,unknown>},
    'en-US': { ...enUS, ...currencies[currency as never] as Record<string,unknown>},
  };
  i18n.locale = locale;

  const handleSetLocale = async (value: string) => {
    setLocale(value)

    await AsyncStorage.setItem('EMLocale', value)
  }

  const handleSetCurrency = async (value: string) => {
    setCurrency(value)

    await AsyncStorage.setItem('EMCurrency', value)
  }

  const handleLoadConfig = async () => {
    const [locale, currency] = await Promise.all([
      AsyncStorage.getItem('EMLocale'),
      AsyncStorage.getItem('EMCurrency'),
    ])

    if (locale) {
      setLocale(locale)
    }

    if (currency) {
      setCurrency(currency)
    }
  }

  useLayoutEffect(() => {
    handleLoadConfig()
  }, [])

  return (
    <LocaleContext.Provider value={{ handleSetLocale, i18n, handleSetCurrency }}>
      { children }
    </LocaleContext.Provider>
  );
}

export default LocaleProvider;
