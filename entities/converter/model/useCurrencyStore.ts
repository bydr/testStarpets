import { getCurrencyRates } from "@/entities/converter/api/getCurrencyRates"
import { Currency } from "@/entities/converter/constants/constants"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useCurrencyStore = defineStore(
  "currency",
  () => {
    const baseCurrency = ref(Currency.RUB)
    const rates = ref<Map<string, number> | null>(null)
    const isLoading = ref(true)

    const setBaseCurrency = async (currency: string) => {
      baseCurrency.value = currency
      useCookie("baseCurrency").value = currency
      await fetchRates()
    }

    const fetchRates = async () => {
      console.log("[fetchRates]")
      try {
        const ratesRes = await getCurrencyRates()

        rates.value = new Map(
          Object.entries(ratesRes).map((item) => {
            return [item[0], +item[1]]
          }),
        )
      } catch (error) {
        rates.value = new Map()
      }
    }

    const getRate = (fromCurrency, toCurrency) => {
      const key =
        `${fromCurrency}-${toCurrency}`.toLowerCase()

      if (rates.value && rates.value.has(key)) {
        return rates.value.get(key)
      }

      // Если курс не найден
      return 1
    }

    const init = async () => {
      isLoading.value = true
      const cookieCurrency = useCookie("baseCurrency").value
      if (cookieCurrency) {
        baseCurrency.value = cookieCurrency
      }
      await fetchRates()
      isLoading.value = false
    }

    return {
      baseCurrency,
      setBaseCurrency,
      init,
      isLoading,
      rates,
      getRate,
    }
  },
)
