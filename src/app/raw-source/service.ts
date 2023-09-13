import source from './data.json'
import { Source } from './types'

const countries = source as Source[]

const getConvertedSource = (translation: keyof Source['translations']) => {
  const newSource = countries.map((country) => {
    const states = country.states.map((state) => {
      const cities = state.cities.map((city) => ({
        value: String(city.id),
        label: city.name,
      }))

      return {
        value: String(state.id),
        label: state.name,
        cities,
      }
    })

    return {
      value: country.iso2,
      label: country.translations[translation] || country.name,
      states,
    }
  })

  return newSource
}

export { getConvertedSource }
