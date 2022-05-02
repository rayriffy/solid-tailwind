import { Component, For } from 'solid-js'
import { useRouteData } from 'solid-app-router'

import { Data } from './fetch.data'
import { useTitle } from '../core/services/useTitle'

const Page: Component = () => {
  const data = useRouteData<() => Data>()
  useTitle('Fetch')

  return (
    <>
      <h1 className="text-2xl font-bold text-gray-900">Blogs</h1>
      <div className="mt-4 space-y-4">
        <For
          each={data()?.blogs}
          fallback={
            data() === undefined ? <div>loading</div> : <div>no data</div>
          }
        >
          {blog => (
            <div className="bg-white border shadow rounded-lg overflow-hidden">
              <img className="w-full h-auto" src={blog.image} />
              <div className="px-5 py-4">
                <h1 className="text-xl font-semibold">{blog.name}</h1>
              </div>
            </div>
          )}
        </For>
      </div>
    </>
  )
}

export default Page
