<template>
  <div class="w-full h-auto my-3">
    <div class="text-left">
      <span @click="toggleFilters" class="cursor-pointer">FILTRY I KATEGORIE</span>
    </div>
    <div v-if="isExpanded" class="flex flex-wrap md:space-x-10 cursor-pointer">
      <FiltersItemHouses label="Domki:" />
      <FiltersItemAnimals label="Zwierzęta:" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import FiltersItemHouses from './FiltersItemHouses.vue'
import FiltersItemAnimals from './FiltersItemAnimals.vue'
import useBreakpoints from '../composables/useBreakpoints'

export default defineComponent({
  name: 'Filters',
  components: { FiltersItemHouses, FiltersItemAnimals },
  setup() {
    const { windowWidth } = useBreakpoints()
    const isExpanded = ref(windowWidth.value >= 768)

    const toggleFilters = () => {
      isExpanded.value = isExpanded.value == false ? true : false
    }

    watch(windowWidth, () => {
      isExpanded.value = windowWidth.value >= 768
    })

    return { isExpanded, toggleFilters }
  },
})
</script>
