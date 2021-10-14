<template>
  <div class="flex justify-center">
    <table class="w-full md:w-1/3">
      <div class="font-medium text-center pb-3 text-red-300" v-show="isTableEmpty">
        Brak danych do wyświetlenia
      </div>
      <tbody v-show="!isTableEmpty">
        <tr>
          <td
            class="font-medium pb-3 cursor-pointer"
            v-show="selectedHouses.length != 0"
            @click="sort('animals', 'name')">
            Zwierze
          </td>
          <td
            class="font-medium text-center pb-3 cursor-pointer"
            v-for="(itemHouses, indexHouses) in filtredHouses"
            :key="indexHouses"
            v-show="selectedHouses.includes(indexHouses)"
            @click="sort('houses', 'value')">
            {{ itemHouses.name }}
          </td>
        </tr>

        <tr v-for="(itemAnimals, indexAnimals) in filtredAnimals" :key="indexAnimals">
          <td v-if="selectedAnimals.includes(indexAnimals)">{{ itemAnimals.name }}</td>
          <td
            class="text-center pb-3"
            v-for="(housesAnimals, indexHousesInAnimals) in filtredHouses"
            :key="indexHousesInAnimals"
            v-show="
              selectedAnimals.includes(indexAnimals) &&
              selectedHouses.includes(indexHousesInAnimals)
            ">
            {{
              Math.floor((itemAnimals.value * housesAnimals.value) / selectedCurrencys) + // @ts-ignore
              symbolCurrency
            }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import {
  filtredAnimals,
  selectedAnimals,
  filtredHouses,
  selectedHouses,
} from '../composables/useFilters'
import { sort } from '../composables/useSort'
import { stateCurreny, selectedCurrency, symbolCurrency } from '../composables/useCurrency'

export default defineComponent({
  name: 'Table',
  components: {},
  setup() {
    const isTableEmpty = computed(
      () => selectedHouses.value.length == 0 || selectedAnimals.value.length == 0
    )
    const selectedCurrencys = computed(() => stateCurreny[selectedCurrency.value as keyof object])
    const housesMultiplier: number[] = [1, 2]

    return {
      sort,
      filtredAnimals,
      selectedAnimals,
      filtredHouses,
      selectedHouses,
      isTableEmpty,
      housesMultiplier,
      selectedCurrencys,
      symbolCurrency,
    }
  },
})
</script>

<style>
/* td,
tr {
  padding: 0.5rem;
} */
</style>
