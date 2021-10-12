<template>
  <div class="w-full h-min flex items-center justify-between py-4">
    <div class="font-medium">Sklep Jasia</div>
    <Search />
  </div>
  <hr />
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
