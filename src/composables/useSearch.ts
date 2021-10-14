import { ref } from 'vue'
import { filtredAnimals, formatedAnimals } from './useFilters'

export const search = (pharse: string | number) => {
  filtredAnimals.value = formatedAnimals.value
  if (pharse != null) {
    const results: any = ref([])
    filtredAnimals.value.find((item: any) => {
      // for numbers
      item.value.map((el: any) => {
        if (el == pharse) {
          results.value.push(item)
        }
      })
      // for stirngs
      if (item.name.toLowerCase().includes(String(pharse).toLowerCase())) {
        results.value.push(item)
      }
    })
    if (pharse == '') filtredAnimals.value = formatedAnimals.value
    if (pharse != '') filtredAnimals.value = results.value
  }
}

export default { search }
