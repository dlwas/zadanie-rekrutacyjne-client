import { ref } from 'vue'
import { getData } from './useData'

const data: any = ref(await getData())

const dataSelected = (array: any) => {
  const results = []
  for (let i = 0; i <= array.length - 1; i++) results.push(i)
  return results
}

export const selectIndexes = (array: any, index: number): void => {
  if (array.includes(index)) {
    const indexof = array.indexOf(index)
    if (indexof > -1) {
      array.splice(indexof, 1)
    }
  } else {
    array.push(index)
  }
}

// filter houses { filtredHouses, selectedHouses }
export const filtredHouses = ref(data.value.houses)
export const selectedHouses: any = ref(dataSelected(filtredHouses.value))

// filter animlas { filtredAnimals, selectedAnimals }
export const formatedAnimals: any = ref([])
data.value.animals.forEach((el: any) => {
  formatedAnimals.value.push({
    name: el.name,
    type: el.type,
    id: el.id,
    value: filtredHouses.value.map((item: any) => item.value * el.value),
  })
})
export const filtredAnimals = ref(formatedAnimals.value)
// export const selectedAnimals = ref([0, 1, 2])
export const selectedAnimals = ref(dataSelected(filtredAnimals.value))

export const rawData = data

export default {
  selectIndexes,
  filtredHouses,
  selectedHouses,
  filtredAnimals,
  selectedAnimals,
}
