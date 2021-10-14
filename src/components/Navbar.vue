<template>
  <div class="w-full h-min flex items-center justify-between py-4">
    <div class="font-medium">Sklep Jasia</div>
    <div>
      <Currency />
      <Search />
    </div>
  </div>
  <hr />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Search from './Search.vue'
import Currency from './Currency.vue'

export default defineComponent({
  name: 'Navbar',
  components: { Currency, Search },
  setup() {
    return {}
  },
})
</script>
