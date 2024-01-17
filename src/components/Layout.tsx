import { PropsWithChildren } from 'react'
import { layout } from './layout.css.js'

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className={layout}>{children}</div>
}
