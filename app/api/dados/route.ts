// app/api/dados/route.ts
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const dataFile = path.join(process.cwd(), 'data', 'submissions.json')

export async function GET() {
  try {
    if (!fs.existsSync(dataFile)) {
      return NextResponse.json({ totalEnviado: 0, envios: [] })
    }
    
    const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'))
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao ler dados' }, { status: 500 })
  }
}