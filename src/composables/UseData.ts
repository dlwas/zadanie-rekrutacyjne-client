import { ref } from 'vue'

const data = ref({
  houses: [
    {
      name: 'Wszystkie',
      default: true,
      value: null,
      tableVisible: true,
    },
    {
      name: 'Na drzewie',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Na ziemi',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Małe',
      default: true,
      value: null,
      tableVisible: true,
    },
    {
      name: 'Średnie',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Duże',
      default: false,
      value: 1,
      tableVisible: true,
    },
  ],
  animals: [
    {
      name: 'Koty',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Psy',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Konie',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Ptaki',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Jeże',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Króliki',
      default: false,
      value: 1,
      tableVisible: true,
    },
    {
      name: 'Kury',
      default: false,
      value: 1,
      tableVisible: true,
    },
  ],
})

export default data
