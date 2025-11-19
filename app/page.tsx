import { Suspense } from 'react'
import { getWeather } from '@/lib/weather'
import { WeatherWidget } from '@/components/weather-widget'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const dynamic = 'force-dynamic'

export default function Page() {
  // Start fetching the data on the server.
  // We pass the *promise* itself to the client component, not the awaited data.
  const weatherPromise = getWeather('San Francisco')

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 gap-8">
      <div className="text-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          React 'use' API Demo
        </h1>
        <p className="text-muted-foreground">
          Streaming data from Server to Client using promises.
        </p>
      </div>

      <Suspense fallback={<WeatherSkeleton />}>
        <WeatherWidget weatherPromise={weatherPromise} />
      </Suspense>
    </div>
  )
}

function WeatherSkeleton() {
  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Weather</CardTitle>
        <div className="h-4 w-4 rounded-full bg-muted animate-pulse" />
      </CardHeader>
      <CardContent>
        <div className="h-8 w-16 bg-muted rounded animate-pulse mb-1" />
        <div className="h-3 w-24 bg-muted rounded animate-pulse" />
      </CardContent>
    </Card>
  )
}
