<template>
  <header
    class="header pt-4 pb-4 flex justify-center gap-4"
  >
    <NavigationMenu :items="items" />
    <CurrencySelector />
  </header>
</template>

<script setup lang="ts">
import { CurrencySelector } from "@/features/CurrencySelector"
import { NavigationMenu } from "@/features/NavigationMenu"

const items = [
  {
    name: "Главная",
    path: "/",
  },
  {
    name: "Конвертация",
    path: "/convert",
  },
]
</script>
