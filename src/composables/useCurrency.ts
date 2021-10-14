import { computed, reactive, ref } from 'vue'
import { fetchData } from './useFetch'

export const url = (currency: string) => {
  return new URL(`https://api.nbp.pl/api/exchangerates/rates/a/${currency}?format=json`)
}

export const selectedCurrency = ref('PLN')
const PLN = ref(1)
const USD = ref(await fetchData(url('USD')))
const EUR = ref(await fetchData(url('EUR')))

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
  PLN: PLN.value,
  USD: USD.value.rates[0].mid,
  EUR: EUR.value.rates[0].mid,
})

export const setCurrency = (name: any) => {
  selectedCurrency.value = name
}

export default {
  stateCurreny,
  selectedCurrency,
  symbolCurrency,
}
