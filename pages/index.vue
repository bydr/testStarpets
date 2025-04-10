<template>
  <div v-if="!store.isLoading">
    <CurrencyRates />
  </div>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/entities/converter/model/useCurrencyStore"
import { CurrencyRates } from "@/widgets/currency-rates"

const store = useCurrencyStore()
</script>
