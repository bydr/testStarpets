<template>
  <NavigationMenuRoot
    class="relative z-[1] flex justify-center"
  >
    <NavigationMenuList
      class="center m-0 flex list-none rounded-lg bg-white p-1 shadow-sm border"
    >
      <NavigationMenuItem v-for="item in items">
        <NavigationMenuLink as-child>
          <NuxtLink
            :to="item.path"
            class="text-grass11 hover:bg-green3 focus:shadow-green7 block select-none rounded-[4px] px-3 py-2 text-sm font-medium leading-none no-underline outline-none focus:shadow-[0_0_0_2px]"
          >
            {{ item.name }}
          </NuxtLink>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenuRoot>
</template>

<script setup lang="ts">
import type { NavItem } from "@/features/NavigationMenu"
import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuRoot,
} from "reka-ui"

defineProps<{
  items: NavItem[]
}>()
</script>
