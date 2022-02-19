export const thousandize = (num: number, locale: string = 'en'): string => {
  return Number(num).toLocaleString(locale)
}
