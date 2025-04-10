<template>
  <div class="h-[80dvh] w-full flex items-center">
    <div class="grid gap-4 max-w-md mx-auto">
      <div
        v-for="(rate, index) in targetRates"
        :key="index"
        class="mb-2"
      >
        1&nbsp;{{ store.baseCurrency }} =
        {{ rate.value.toFixed(2) }} {{ rate.currency }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Currency } from "@/entities/converter/constants/constants"
import { useCurrencyStore } from "@/entities/converter/model/useCurrencyStore"

const store = useCurrencyStore()

// Все валюты кроме базовой
const targetCurrencies = computed(() =>
  Object.values(Currency).filter(
    (cur) => cur !== store.baseCurrency,
  ),
)

const targetRates = computed(() => {
  return targetCurrencies.value.map((cur) => {
    const key = `${store.baseCurrency}-${cur}`.toLowerCase()
    return {
      value: store.rates?.get(key) ?? 1,
      currency: cur,
    }
  })
})
</script>
