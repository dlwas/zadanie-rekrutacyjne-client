<template>
  <div class="w-full h-min flex justify-between px-6 py-4">
    <div>Sklep Jasia</div>
    <Search />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from './Search.vue'

export default defineComponent({
  name: 'Navbar',
  components: { Search },
  setup() {
    return {}
  },
})
</script>
