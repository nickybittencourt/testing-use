'use client'

import { use } from 'react'
import { WeatherData } from '@/lib/weather'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CloudSun } from 'lucide-react'

interface WeatherWidgetProps {
  weatherPromise: Promise<WeatherData>
}

export function WeatherWidget({ weatherPromise }: WeatherWidgetProps) {
  console.log('[v0] WeatherWidget rendering, about to call use()')
  const weather = use(weatherPromise)
  console.log('[v0] use() returned data:', weather)

  return (
    <Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Current Weather</CardTitle>
        <CloudSun className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{weather.temperature}°F</div>
        <p className="text-xs text-muted-foreground">
          {weather.condition} in {weather.location}
        </p>
      </CardContent>
    </Card>
  )
}
