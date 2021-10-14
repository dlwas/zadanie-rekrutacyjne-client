<template>
  <span
    class="mr-3 cursor-pointer px-2 py-1 border border-gray-300 rounded text-center"
    :class="selectedCurrency == index ? 'bg-blue-100' : 'bg-transparent'"
    v-for="(currency, index) in stateCurreny"
    :key="index"
    @click="setCurrency(index)">
    {{ ` ${index}` }}
  </span>
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
