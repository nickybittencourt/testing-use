import { cache } from 'react'

export interface WeatherData {
  temperature: number
  condition: string
  location: string
}

export const getWeather = cache((location: string): Promise<WeatherData> => {
  console.log('[v0] getWeather called for:', location)
  return new Promise((resolve) => {
    console.log('[v0] Promise created, will resolve in 2 seconds')
    setTimeout(() => {
      console.log('[v0] Promise resolving now')
      resolve({
        temperature: 72,
        condition: 'Sunny',
        location: location,
      })
    }, 5000)
  })
})
