import source from './data.json'
import { Country } from './types'

const countries = source as Country[]

const getLocations = (countryId?: string, stateId?: string) => {
  const allCountries = countries.map(({ value, label }) => ({ value, label }))

  if (!countryId) return allCountries

  const country = countries.find(({ value }) => value === countryId)
  if (!country) return allCountries

  const allStates = country.states.map(({ value, label }) => ({ value, label }))
  if (!stateId) return allStates

  const state = country.states.find(({ value }) => value === stateId)
  if (!state) return allStates

  const allCities = state.cities.map(({ value, label }) => ({ value, label }))
  return allCities
}

const getLocation = (countryId: string, stateId?: string, cityId?: string) => {
  const country = countries.find(({ value }) => value === countryId)
  if (!country) return null

  if (!stateId) return country
  const state = country.states.find(({ value }) => value === stateId)
  if (!state) return null

  if (!cityId) return state
  const city = state.cities.find(({ value }) => value === cityId)
  return city ?? null
}

export { getLocation, getLocations }
