import { computed, reactive, ref } from 'vue'
import { fetchData } from './useFetch'

export const url = (currency: string) => {
  return new URL(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}?format=json`)
}

export const selectedCurrency = ref('PLN')
export const symbolCurrency = computed(() => {
  if (selectedCurrency.value != null) {
    if (selectedCurrency.value == 'PLN') return 'zł'
    if (selectedCurrency.value == 'USD') return '$'
    if (selectedCurrency.value == 'EUR') return '€'
  } else {
    return 'zł'
  }
})
export const stateCurreny = reactive({
  PLN: 1,
  USD: null,
  EUR: null,
})

const USD = await fetchData(url('USD'))
if (USD != null) {
  stateCurreny.USD = USD.rates[0].mid
}

const EUR = await fetchData(url('EUR'))
if (EUR != null) {
  stateCurreny.EUR = EUR.rates[0].mid
}

export const setCurrency = (name: any) => {
  selectedCurrency.value = name
}

export default {
  stateCurreny,
  selectedCurrency,
  symbolCurrency,
}
