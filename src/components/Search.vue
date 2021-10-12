<template>
  <input
    id="inputSearch"
    type="text"
    placeholder="(Tab) Szukaj..."
    ref="inputSearch"
    class="p-1 pl-2 border border-gray-300 rounded" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Search',
  components: {},
  setup() {
    return {}
  },
})
</script>

<style>
input {
  outline: 1px solid whitesmoke;
}
</style>
