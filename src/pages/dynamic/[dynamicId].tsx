import { Component } from 'solid-js'
import { useParams } from 'solid-app-router'
import { useTitle } from '../../core/services/useTitle'

const Page: Component = () => {
  const { dynamicId } = useParams()
  useTitle('Dynamic route')

  return <p>{dynamicId}</p>
}

export default Page
