import { ref } from 'vue'
import { rawData, filtredAnimals } from './useFilters'

export const search = (pharse: string | number) => {
  filtredAnimals.value = rawData.value.animals
  if (pharse != null) {
    const results: any = ref([])
    filtredAnimals.value.find((item) => {
      if (item.name.includes(String(pharse)) || item.value == pharse) {
        results.value.push(item)
      }
    })

    if (pharse == '') filtredAnimals.value = rawData.value.animals
    if (pharse != '') filtredAnimals.value = results.value
  }
}

export default { search }
