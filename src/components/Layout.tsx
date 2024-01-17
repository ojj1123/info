import { PropsWithChildren } from 'react'
import { layout } from './layout.css.ts'

export const Layout = ({ children }: PropsWithChildren) => {
  return <div className={layout}>{children}</div>
}
