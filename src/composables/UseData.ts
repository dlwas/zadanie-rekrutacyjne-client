import { fetchData } from './useFetch'
import { v4 } from 'uuid'

export const getData = async () => {
  const houses = await fetchData('http://localhost:3001/houses', {})
  const animals = await fetchData('http://localhost:3001/animals', {})
  const data = { houses, animals }
  return data
}

export const postData = async (category: string, data: object) => {
  try {
    if (category != null) {
      data = Object.assign({ id: v4 }, data)
      await fetchData(`http://localhost:3001/${category}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export default {
  getData,
}

// const data = ref({
//   houses: [
//     {
//       name: 'Na drzewie',
//       default: false,
//       value: 750,
//       type: 'houses',
//     },
//     {
//       name: 'Na ziemi',
//       default: false,
//       value: 500,
//       type: 'houses',
//     },
//   ],
//   animals: [
//     {
//       name: 'Koty',
//       value: 200,
//       type: 'animals',
//     },
//     {
//       name: 'Psy',
//       value: 250,
//       type: 'animals',
//     },
//     {
//       name: 'Konie',
//       value: 2000,
//       type: 'animals',
//     },
//     {
//       name: 'Ptaki',
//       value: 500,
//       type: 'animals',
//     },
//     {
//       name: 'Jeże',
//       value: 100,
//       type: 'animals',
//     },
//     {
//       name: 'Króliki',
//       value: 100,
//       type: 'animals',
//     },
//     {
//       name: 'Kury',
//       value: 200,
//       type: 'animals',
//     },
//   ],
// })
