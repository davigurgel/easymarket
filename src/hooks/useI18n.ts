import { useContext } from "react"
import { LocaleContext } from "~/context/LocaleProvider"

export const useI18n = () => {
  const locale = useContext(LocaleContext)

  return {
    t: (value: string ) => locale.i18n.t(value),
    c: (value: number ) => locale.i18n.numberToCurrency(value),
    setLocale: (value: string) => locale.handleSetLocale(value),
    setCurrency: (value: string) => locale.handleSetCurrency(value),
  }
}
