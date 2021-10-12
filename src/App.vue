<template>
  <div>
    <Navbar />
    <Filters />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Filters from './components/Filters.vue'
import Table from './components/Table.vue'

export default defineComponent({
  name: 'App',
  components: { Navbar, Filters, Table },
  props: {},
  setup() {
    return {}
  },
})
</script>
