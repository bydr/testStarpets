<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useCurrencyStore } from "@/entities/converter/model/useCurrencyStore"

onMounted(() => {
  const store = useCurrencyStore()
  store?.init()
})
</script>
