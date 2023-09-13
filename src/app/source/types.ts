type Country = {
  value: string
  label: string
  states: State[]
}

type State = {
  value: string
  label: string
  cities: City[]
}

type City = {
  value: string
  label: string
}

export type { Country, State, City }
