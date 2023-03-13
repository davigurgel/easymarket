import 'react-native-reanimated'
import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components/native';

import Routes from '~/Routes';
import theme from '~/theme/theme';
import LocaleProvider from '~/context/LocaleProvider';

export default function App() {
  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <LocaleProvider>
          <Routes />
        </LocaleProvider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}
