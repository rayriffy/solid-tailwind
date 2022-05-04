import { Component } from 'solid-js'
import { useParams, useRouteData } from 'solid-app-router'

import { useTitle } from '../../core/services/useTitle'

const Page: Component = () => {
  const data = useRouteData<() => string>()
  const { dynamicId } = useParams()
  useTitle('Dynamic route')

  return (
    <div className="space-y-2">
      <p className="text-gray-700">dynamicId from useParams: {dynamicId}</p>
      <p className="text-gray-700">data results: {data()}</p>
    </div>
  )
}

export default Page
