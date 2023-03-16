type Params = {
  [key: string]: any
}

export interface Navigation {
  navigation: {
    navigate: (routeName: string, params?: Params) => void
    goBack: () => void
    replace: (routeName: string, params?: Params) => void
  }
}

export type RouteType<ParamType> = Readonly<{
  key: string
  name: string
  path?: string | undefined
}> & Readonly<{params?: Readonly<ParamType | undefined>}>
Chat

