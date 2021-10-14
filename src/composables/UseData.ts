import { ref } from 'vue'

const data = ref({
  houses: [
    {
      name: 'Na drzewie',
      default: false,
      value: 750,
      type: 'houses',
    },
    {
      name: 'Na ziemi',
      default: false,
      value: 500,
      type: 'houses',
    },
  ],
  animals: [
    {
      name: 'Koty',
      value: 200,
      type: 'animals',
    },
    {
      name: 'Psy',
      value: 250,
      type: 'animals',
    },
    {
      name: 'Konie',
      value: 2000,
      type: 'animals',
    },
    {
      name: 'Ptaki',
      value: 500,
      type: 'animals',
    },
    {
      name: 'Jeże',
      value: 100,
      type: 'animals',
    },
    {
      name: 'Króliki',
      value: 100,
      type: 'animals',
    },
    {
      name: 'Kury',
      value: 200,
      type: 'animals',
    },
  ],
})

export default data
