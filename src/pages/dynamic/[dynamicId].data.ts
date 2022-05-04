import { RouteDataFunc } from 'solid-app-router'
import { createResource } from 'solid-js'

const DynamicIdData: RouteDataFunc = ctx => {
  const { dynamicId } = ctx.params

  const [data] = createResource(
    () => new Promise<string>(res => setTimeout(() => res(dynamicId), 2000))
  )

  return data
}

export default DynamicIdData
