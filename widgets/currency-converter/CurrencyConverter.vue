<template>
  <div class="h-[80dvh] w-full flex items-center">
    <div class="grid gap-4 max-w-md mx-auto">
      <div class="flex gap-2">
        <div class="w-1/2">
          <SelectRoot v-model="from">
            <SelectTrigger
              class="inline-flex min-w-[160px] py-2 items-center justify-between rounded-lg px-[15px] text-xs leading-none h-[40px] gap-[5px] bg-white text-grass11 hover:bg-stone-50 border shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
              aria-label="Customise options"
            >
              <SelectValue
                placeholder="Select a currency..."
              />
              <Icon
                icon="radix-icons:chevron-down"
                class="h-3.5 w-3.5"
              />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent
                class="min-w-[160px] bg-white rounded-lg border shadow-sm will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                align="end"
              >
                <SelectScrollUpButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-up" />
                </SelectScrollUpButton>

                <SelectViewport class="p-[5px]">
                  <SelectLabel
                    class="px-[25px] text-xs leading-[25px] text-mauve11"
                  >
                    Currencies
                  </SelectLabel>
                  <SelectGroup>
                    <SelectItem
                      v-for="option in optionsCurrency"
                      :key="option.value"
                      class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                      :value="option.value"
                    >
                      <SelectItemIndicator
                        class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                      >
                        <Icon icon="radix-icons:check" />
                      </SelectItemIndicator>
                      <SelectItemText>
                        {{ option.label }}
                      </SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-down" />
                </SelectScrollDownButton>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div class="w-1/2">
          <input
            class="py-2 px-3 bg-gray-100"
            v-model.number="amountFrom"
            @input="convertTo"
            @keydown="handleNumberInput"
          />
        </div>
      </div>
      <div class="flex gap-2">
        <div class="w-1/2">
          <SelectRoot v-model="to">
            <SelectTrigger
              class="inline-flex min-w-[160px] py-2 items-center justify-between rounded-lg px-[15px] text-xs leading-none h-[40px] gap-[5px] bg-white text-grass11 hover:bg-stone-50 border shadow-sm focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-green9 outline-none"
              aria-label="Customise options"
            >
              <SelectValue
                placeholder="Select a currency..."
              />
              <Icon
                icon="radix-icons:chevron-down"
                class="h-3.5 w-3.5"
              />
            </SelectTrigger>

            <SelectPortal>
              <SelectContent
                class="min-w-[160px] bg-white rounded-lg border shadow-sm will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade z-[100]"
                align="end"
              >
                <SelectScrollUpButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-up" />
                </SelectScrollUpButton>

                <SelectViewport class="p-[5px]">
                  <SelectLabel
                    class="px-[25px] text-xs leading-[25px] text-mauve11"
                  >
                    Currencies
                  </SelectLabel>
                  <SelectGroup>
                    <SelectItem
                      v-for="option in optionsCurrency"
                      :key="option.value"
                      class="text-xs leading-none text-grass11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-green9 data-[highlighted]:text-green1"
                      :value="option.value"
                    >
                      <SelectItemIndicator
                        class="absolute left-0 w-[25px] inline-flex items-center justify-center"
                      >
                        <Icon icon="radix-icons:check" />
                      </SelectItemIndicator>
                      <SelectItemText>
                        {{ option.label }}
                      </SelectItemText>
                    </SelectItem>
                  </SelectGroup>
                </SelectViewport>

                <SelectScrollDownButton
                  class="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default"
                >
                  <Icon icon="radix-icons:chevron-down" />
                </SelectScrollDownButton>
              </SelectContent>
            </SelectPortal>
          </SelectRoot>
        </div>
        <div class="w-1/2">
          <input
            class="py-2 px-3 bg-gray-100"
            v-model.number="amountTo"
            @input="convertFrom"
            @keydown="handleNumberInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  Currency,
  optionsCurrency,
} from "@/entities/converter/constants/constants"
import { useCurrencyStore } from "@/entities/converter/model/useCurrencyStore"
import { Icon } from "@iconify/vue"
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from "reka-ui"
import { ref } from "vue"

const store = useCurrencyStore()
const { baseCurrency, rates } = storeToRefs(store)

const from = ref(baseCurrency.value) // создаём копию значения, а не ссылку
const to = ref(Currency.USD)
const amountFrom = ref(1)
const amountTo = ref(1)

const convertTo = () => {
  const rate = store.getRate(from.value, to.value)
  amountTo.value = +(amountFrom.value * rate).toFixed(2)
}

const convertFrom = () => {
  const rate = store.getRate(to.value, from.value)
  amountFrom.value = +(amountTo.value * rate).toFixed(2)
}

const handleNumberInput = (e: KeyboardEvent) => {
  const allowed = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
  ]
  if (
    !/^\d$/.test(e.key) &&
    !allowed.includes(e.key) &&
    e.key !== "." &&
    e.key !== ","
  ) {
    e.preventDefault()
  }
}

watch(from, (newFrom) => {
  console.log("[watch from]", newFrom)
  convertFrom()
})

watch(to, (newTo) => {
  console.log("[watch to]", newTo)
  convertTo()
})

onMounted(() => {
  // Обновляем значения после инициализации
  if (rates) {
    convertTo()
  }
})
</script>
