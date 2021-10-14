import { fetchData } from './useFetch'

export const getData = async () => {
  const houses = await fetchData('http://localhost:3001/houses', {})
  const animals = await fetchData('http://localhost:3001/animals', {})
  const data = { houses, animals }
  return data
}

export const postData = async (category: string, data: object) => {
  try {
    if (category != null) {
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

export const deleteData = async (id: number) => {
  try {
    if (id != null) {
      await fetchData(`http://localhost:3001/animals/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
    }
  } catch (error) {
    console.log(error)
  }
}

export default {
  getData,
  deleteData,
}
