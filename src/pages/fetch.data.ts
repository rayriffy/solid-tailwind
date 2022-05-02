import { createResource } from 'solid-js'
import { RouteDataFunc } from 'solid-app-router'

import axios from 'axios'

export interface Data {
  blogs: {
    image: string
    name: string
    url: string
  }[]
}

const FetchData: RouteDataFunc = ctx => {
  // const {} = ctx.params

  const [data] = createResource<Data>(async () => {
    const blogs = await axios.get(
      'https://blog.rayriffy.com/api/author/rayriffy?page=1'
    )

    return {
      blogs: blogs.data.data.map(item => ({
        name: item.title,
        image: item.banner.url,
        url: item.url,
      })),
    }
  })

  return data
}

export default FetchData
