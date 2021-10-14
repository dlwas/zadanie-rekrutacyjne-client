<template>
  <input
    id="inputSearch"
    type="text"
    placeholder="(Tab) Szukaj..."
    ref="inputSearch"
    class="p-1 pl-2 border border-gray-300 rounded"
    @keyup.enter="search(pharse)"
    v-model="pharse" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { search } from '../composables/useSearch'

export default defineComponent({
  name: 'Search',
  components: {},
  setup() {
    const pharse = ref('')

    return { search, pharse }
  },
})
</script>

<style>
input {
  outline: 1px solid whitesmoke;
}
</style>
