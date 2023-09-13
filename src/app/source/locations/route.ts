import { NextRequest, NextResponse } from 'next/server'
import { getLocations } from '../service'

const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)

  const countryId = searchParams.get('countryId')
  const stateId = searchParams.get('stateId')

  const locations = getLocations(countryId ?? undefined, stateId ?? undefined)

  return NextResponse.json(locations)
}

export { GET }
