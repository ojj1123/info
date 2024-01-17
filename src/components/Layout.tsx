import { PropsWithChildren } from 'react'
import { layout } from './Layout.css.js'

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className={layout}>{children}</div>
}
