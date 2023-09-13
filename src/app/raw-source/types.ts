type Country = {
  id: number
  name: string
  iso3: string
  iso2: string
  numeric_code: string
  phone_code: string
  capital: string
  currency: string
  currency_name: string
  currency_symbol: string
  tld: string
  native: null | string
  region: Region
  subregion: string
  nationality: string
  timezones: Timezone[] | null
  translations: Translations
  latitude: string
  longitude: string
  emoji: string
  emojiU: string
  states: State[]
}

type Region = 'Asia' | 'Europe' | 'Africa' | 'Oceania' | 'Americas' | 'Polar' | ''

type State = {
  id: number
  name: string
  state_code: string
  latitude: null | string
  longitude: null | string
  type: null | string
  cities: City[]
}

type City = {
  id: number
  name: string
  latitude: string
  longitude: string
}

type Timezone = {
  zoneName: string
  gmtOffset: number
  gmtOffsetName: string
  abbreviation: string
  tzName: string
}

type Translations = {
  kr: string
  'pt-BR'?: string
  pt?: string
  nl?: string
  hr?: string
  fa?: string
  de?: string
  es?: string
  fr?: string
  ja?: string
  it?: string
  cn: string
  tr: string
}

export type { Country as Source, Region, State, City, Timezone, Translations }
