<template>
  <div class="my-2">
    <p>Waluty:</p>
    <div class="flex flex-wrap flex-shrink">
      <span
        class="m-1 px-2 py-1 border border-gray-300 rounded"
        :class="selectedCurrency == index ? 'bg-blue-100' : 'bg-transparent'"
        v-for="(_, index) in stateCurreny"
        :key="index"
        @click="setCurrency(index)">
        {{ ` ${index}` }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { stateCurreny, selectedCurrency, setCurrency } from '../composables/useCurrency'

export default defineComponent({
  name: 'Currency',
  components: {},
  setup() {
    return { stateCurreny, selectedCurrency, setCurrency }
  },
})
</script>
