<template>
  <div class="w-full h-auto my-3">
    <div class="text-right">
      <span @click="toggleFilters" class="cursor-pointer">FILTRY I KATEGORIE</span>
    </div>
    <div v-if="isExpanded" class="flex flex-wrap md:space-x-10">
      <FiltersItem label="Domki:" :data="filters.house" />
      <FiltersItem label="Zwierzęta:" :data="filters.animals" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import FiltersItem from './FiltersItem.vue'
import useBreakpoints from '../composables/useBreakpoints'

export default defineComponent({
  name: 'Filters',
  components: { FiltersItem },
  setup() {
    const { windowWidth } = useBreakpoints()
    const isExpanded = ref(windowWidth.value >= 768)

    const toggleFilters = () => {
      isExpanded.value = isExpanded.value == false ? true : false
    }

    watch(windowWidth, () => {
      isExpanded.value = windowWidth.value >= 768
    })

    const filters = ref({
      house: [
        {
          name: 'Wszystkie',
          default: true,
          value: null,
        },
        {
          name: 'Na drzewie',
          default: false,
          value: 1,
        },
        {
          name: 'Na ziemi',
          default: false,
          value: 1,
        },
      ],
      animals: [
        {
          name: 'Koty',
          default: false,
          value: 1,
        },
        {
          name: 'Psy',
          default: false,
          value: 1,
        },
        {
          name: 'Konie',
          default: false,
          value: 1,
        },
        {
          name: 'Ptaki',
          default: false,
          value: 1,
        },
        {
          name: 'Jeże',
          default: false,
          value: 1,
        },
        {
          name: 'Króliki',
          default: false,
          value: 1,
        },
        {
          name: 'Kury',
          default: false,
          value: 1,
        },
      ],
    })

    return { isExpanded, toggleFilters, filters }
  },
})
</script>
