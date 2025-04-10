export const getCurrencyRates = async (): Promise<
  Record<string, number>
> => {
  try {
    const res = await fetch(
      "https://status.neuralgeneration.com/api/currency",
    )

    if (!res.ok) {
      throw new Error(`Произошла ошибка: ${res.status}`)
    }

    const data = await res.json()

    return data ?? {}
  } catch (error) {
    console.error("[getCurrencyRates]", error)
    throw error
  }
}
