<template>
  <div class="my-3">
    <p>{{ label }}</p>
    <div class="flex flex-wrap">
      <span
        v-for="(item, index) in data"
        :key="index"
        class="m-1 px-2 py-1 border border-gray-300 rounded"
        :class="selected == index ? 'bg-blue-100' : 'bg-transparent'"
        @click="select(index)">
        {{ item.name }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'FiltersItem',
  components: {},
  props: {
    label: {
      type: String,
      required: true,
    },
    data: <any>{
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const selected: Ref<number> = ref(props.data.findIndex((elm: any) => elm.default))
    // const selectedItem: any = ref(props.data[selected.value])

    const select = (index: number): void => {
      selected.value = index
    }

    return {
      select,
      selected,
    }
  },
})
</script>
