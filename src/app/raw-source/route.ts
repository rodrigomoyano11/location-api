import { NextResponse } from 'next/server'
import { getConvertedSource } from './service'

const GET = async () => {
  const locations = getConvertedSource('es')

  return NextResponse.json(locations)
}

export { GET }
