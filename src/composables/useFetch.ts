import { reactive, watchEffect } from 'vue'

export const stateFetch = reactive({
  loading: <boolean>false,
  error: <any>{},
  data: null,
})

const defaultUrl = ''
const defaultOptions = {}

export const fetchData = async (url: Request | string | URL = defaultUrl, options: object = defaultOptions) => {
  stateFetch.loading = true
  try {
    const response = await fetch(url as keyof object, options)
    const json = await response.json()
    response.ok ? (stateFetch.data = json) : (stateFetch.error = `Error on 'fetching' data`)
    return json
  } catch (error) {
    stateFetch.error = `Error on 'fetching' data: ${stateFetch.error.message}`
  } finally {
    stateFetch.loading = false
  }
}

watchEffect(() => {
  fetchData()
})

export default { stateFetch, fetchData }
