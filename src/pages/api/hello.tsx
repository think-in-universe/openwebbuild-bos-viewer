
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'

export const runtime = 'edge'

export default function GET(request: NextRequest) {
  return new Response(JSON.stringify({ name: 'Hello World' }))
}
