<template>
  <div
    class="w-full h-auto flex flex-col justify-center px-6"
    v-on:keyup.tab="focusSearch"
    v-on:keyup.esc="unfocusSearch">
    <Navbar />
    <Panel/>
    <Filters />
    <Table />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from './components/Navbar.vue'
import Filters from './components/Filters.vue'
import Table from './components/Table.vue'
import Panel from './components/Panel.vue'

import { focusById } from './composables/useUtils'

export default defineComponent({
  name: 'App',
  components: { Navbar, Filters, Table, Panel },
  setup() {
    const focusSearch = (): void => {
      focusById('inputSearch', 'focus')
    }
    const unfocusSearch = (): void => {
      focusById('inputSearch', 'unfocus')
    }

    return { focusSearch, unfocusSearch }
  },
})
</script>
