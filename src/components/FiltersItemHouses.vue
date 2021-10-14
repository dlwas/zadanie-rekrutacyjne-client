<template>
  <div class="my-3">
    <p>{{ label }}</p>
    <div class="flex flex-wrap">
      <span
        v-for="(item, index) in filtredHouses"
        :key="index"
        class="m-1 px-2 py-1 border border-gray-300 rounded"
        :class="selectedHouses.includes(index) ? 'bg-blue-100' : 'bg-transparent'"
        @click="selectIndexes(selectedHouses, index)">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { filtredHouses, selectedHouses, selectIndexes } from '../composables/useFilters'

export default defineComponent({
  name: 'FiltersItemHouses',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  setup() {
    return {
      filtredHouses,
      selectedHouses,
      selectIndexes,
    }
  },
})
</script>
