'use client'

import React, { use } from 'react'

export default function Test({ promiseTest }: { promiseTest: Promise<any> }) {
  const test = use(promiseTest)
  return <div>Test</div>
}
