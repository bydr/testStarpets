<template>
  <div v-if="!store.isLoading">
    <CurrencyConverter />
  </div>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/entities/converter/model/useCurrencyStore"
import { CurrencyConverter } from "@/widgets/currency-converter"
const store = useCurrencyStore()
</script>
