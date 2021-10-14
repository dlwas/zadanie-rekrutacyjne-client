<template>
  <div>
    <p @click="togglePanel" class="w-max uppercase cursor-pointer">dodaj</p>
    <p v-if="isChecked && !isValidate">Wypełnij poprawnie wszytkie pola!</p>
    <form @submit.prevent v-if="isExpanded" class="flex flex-wrap items-center md:space-x-10">
      <div class="py-2">
        <label for="name" class="pr-3 flex flex-shrink">Nazwa</label>
        <input
          name="name"
          type="text"
          class="border border-gray-300 rounded flex flex-shrink"
          v-model="data.name" />
      </div>
      <div class="py-2">
        <label for="multiplier" class="pr-3 flex flex-shrink">Mnożnik</label>
        <input
          name="multiplier"
          type="number"
          class="border border-gray-300 rounded flex flex-shrink"
          step="any"
          v-model="data.value" />
      </div>
      <div class="py-2">
        <label for="type" class="pr-3 flex flex-shrink">Typ</label>
        <input
          name="type"
          type="text"
          class="border border-gray-300 rounded flex flex-shrink"
          v-model="data.type" />
      </div>
    </form>
    <button
      v-if="isExpanded"
      class="px-2 py-1 rounded"
      :class="isValidate ? 'bg-green-300' : 'bg-red-300'"
      @click="addCategory">
      Dodaj
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, Ref, ref, watch } from 'vue'
import useBreakpoints from '../composables/useBreakpoints'
import { postData } from '../composables/useData'

export default defineComponent({
  name: 'Panel',
  components: {},
  setup() {
    const { windowWidth } = useBreakpoints()
    const isExpanded: Ref<boolean> = ref(windowWidth.value >= 768)
    const isValidate: Ref<boolean> = ref(false)
    const isChecked: Ref<boolean> = ref(false)
    const data = reactive({
      name: '',
      value: null,
      type: '',
    })

    const togglePanel = () => {
      isExpanded.value = isExpanded.value == false ? true : false
    }

    const addCategory = () => {
      isChecked.value = true
      if (isChecked.value && isValidate.value) {
        try {
          postData(data.type, data)
          window.location.reload()
        } catch (error) {
          console.log(error)
        }
      }
    }

    watch(data, () => {
      const val: any = ref([])
      val.value.push(typeof data.name == 'string' && data.name != '' ? true : false)
      val.value.push(typeof data.value == 'number' && data.value != 0 ? true : false)
      val.value.push(typeof data.type == 'string' && data.type != '' ? true : false)
      val.value.push(data.type == 'houses' || data.type == 'animals' ? true : false)
      isValidate.value = val.value.every((item: boolean) => item != false)
    })

    watch(windowWidth, () => {
      isExpanded.value = windowWidth.value >= 768
    })

    return { isExpanded, togglePanel, isValidate, data, addCategory, isChecked }
  },
})
</script>

<!-- // USAGE
  // postData('animals', {
  //   name: 'Kury',
  //   value: 200,
  //   type: 'animals',
  // })

  // postData('houses', {
  //   name: 'Kury',
  //   value: 200,
  //   type: 'animals',
  // }) -->
