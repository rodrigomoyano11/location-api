import { NextRequest, NextResponse } from 'next/server'
import { getLocation, getLocations } from '../service'

const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)

  const countryId = searchParams.get('countryId')
  const stateId = searchParams.get('stateId')
  const cityId = searchParams.get('cityId')

  if (!countryId) return NextResponse.error()

  const locations = getLocation(countryId, stateId ?? undefined, cityId ?? undefined)

  return NextResponse.json(locations)
}

export { GET }
