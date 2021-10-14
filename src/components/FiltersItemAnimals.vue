<template>
  <div class="my-3">
    <p>{{ label }}</p>
    <div class="flex flex-wrap">
      <span
        v-for="(item, index) in filtredAnimals"
        :key="index"
        class="m-1 px-2 py-1 border border-gray-300 rounded"
        :class="selectedAnimals.includes(index) ? 'bg-blue-100' : 'bg-transparent'"
        @click="selectIndexes(selectedAnimals, index)">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { filtredAnimals, selectedAnimals, selectIndexes } from '../composables/useFilters'

export default defineComponent({
  name: 'FiltersItemAnimals',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      filtredAnimals,
      selectedAnimals,
      selectIndexes,
    }
  },
})
</script>
