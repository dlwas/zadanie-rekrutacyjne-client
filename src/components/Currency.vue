<template>
  <div class="my-3">
    <p>Waluta</p>
    <div class="flex flex-wrap">
      <span
        class="mr-3 cursor-pointer px-2 py-1 border border-gray-300 rounded text-center"
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
