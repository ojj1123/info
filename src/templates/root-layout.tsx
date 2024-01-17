import '../style.css'

import type { ReactNode } from 'react'

import { Footer } from '../components/footer.tsx'
import { Layout } from '../components/layout.tsx'

type RootLayoutProps = { children: ReactNode }

export const RootLayout = async ({ children }: RootLayoutProps) => {
  return (
    <div id='__waku' className="font-['Inter']">
      <Layout>
        <link
          rel='icon'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👋</text></svg>'
        />
        <main className='flex flex-row items-center w-full flex-1'>
          <div className='flex flex-col items-center w-full flex-1'>
            {children}
          </div>
        </main>
        <Footer />
      </Layout>
    </div>
  )
}
