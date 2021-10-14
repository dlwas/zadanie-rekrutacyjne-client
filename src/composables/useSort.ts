import { ref } from 'vue'
import { filtredAnimals } from './useFilters'

export let isAsc = true
export const imputArray = ref()

export const sort = (columnName: string, type: string) => {
  if (columnName == 'houses') imputArray.value = filtredAnimals.value
  if (columnName == 'animals') imputArray.value = filtredAnimals.value
  const newData = imputArray.value.sort((a: any, b: any) => {
    a = a[type]
    b = b[type]
    if (typeof a == 'number') return isAsc ? a - b : b - a
    if (typeof a == 'string') return isAsc ? a.localeCompare(b) : b.localeCompare(a)
  })
  // toggle asc / desc
  isAsc = !isAsc
  // update data
  if (columnName == 'houses') filtredAnimals.value = newData
  if (columnName == 'animals') filtredAnimals.value = newData
}

export default {
  sort,
  isAsc,
}
