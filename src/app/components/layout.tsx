import { Component } from 'solid-js'

import { Footer } from './footer'
import { Header } from './header'

export const Layout: Component = props => {
  return (
    <div className="mx-auto max-w-md pt-12 px-6">
      <Header />
      <div className="mt-6">{props.children}</div>
      <Footer />
    </div>
  )
}
