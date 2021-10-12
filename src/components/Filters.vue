<template>
  <div class="w-full h-auto my-3">
    <div class="text-right">
      <span @click="toggleFilters" class="cursor-pointer">FILTRY I KATEGORIE</span>
    </div>
    <div v-if="isExpanded" class="flex flex-wrap md:space-x-10">
      <FiltersItem label="Domki:" :data="filters.houses" />
      <FiltersItem label="Zwierzęta:" :data="filters.animals" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import FiltersItem from './FiltersItem.vue'
import useData from '../composables/useData'
import useBreakpoints from '../composables/useBreakpoints'

export default defineComponent({
  name: 'Filters',
  components: { FiltersItem },
  setup() {
    const { windowWidth } = useBreakpoints()
    const isExpanded = ref(windowWidth.value >= 768)
    const filters = useData.value

    const toggleFilters = () => {
      isExpanded.value = isExpanded.value == false ? true : false
    }

    watch(windowWidth, () => {
      isExpanded.value = windowWidth.value >= 768
    })

    return { isExpanded, toggleFilters, filters }
  },
})
</script>
