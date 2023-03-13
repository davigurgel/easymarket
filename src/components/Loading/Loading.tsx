import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native';

type LoadingProps = {
  color: string,
  size: 'small' | 'large'
}

const Loading = ({size = 'small', color}: LoadingProps) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItens: 'center',
    justifyContent: 'center',
  }
})

export default Loading;
