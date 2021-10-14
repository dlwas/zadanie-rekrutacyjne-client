<template>
  <input
    id="inputSearch"
    type="text"
    placeholder="(Tab) Szukaj..."
    ref="inputSearch"
    class="flex flex-shrink p-1 pl-2 border border-gray-300 rounded"
    @keyup.enter="search(pharse)"
    v-model="pharse" />
</template>

<script lang="ts">
import { defineComponent, Ref, ref, watch } from 'vue'
import { search } from '../composables/useSearch'

export default defineComponent({
  name: 'Search',
  components: {},
  setup() {
    const pharse: Ref<string> | Ref<number> = ref('')

    watch(pharse, () => {
      search(pharse.value)
    })

    return { search, pharse }
  },
})
</script>

<style>
input {
  outline: 1px solid whitesmoke;
}
</style>
