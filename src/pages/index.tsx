import { Link } from 'solid-app-router'
import { Component } from 'solid-js'
import { useTitle } from '../core/services/useTitle'

const Page: Component = () => {
  useTitle('Home')

  return (
    <div className="space-y-4">
      <h1 className="font-bold text-2xl text-gray-900">Hello!</h1>
      <p className="text-gray-700">
        This is up-to-speed template repository for rapid SolidJS development
      </p>
      <p className="text-gray-700">
        Remember! Component render only once, state acts as subscriber
      </p>
      <div className="space-x-2">
        <Link href="/fetch">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            /fetch
          </button>
        </Link>
        <Link href="/dynamic/12">
          <button
            type="button"
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            /dynamic/[dynamicId]
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Page
