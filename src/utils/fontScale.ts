import { PixelRatio } from 'react-native'

export const fontScale = (fontSize: number) => {
  const scale = PixelRatio.getFontScale()

  return Math.round(fontSize * scale)
}
