import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { Root } from 'waku/client'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { ErrorBoundary } from './components/error-boundary.js'
import { Router } from 'waku/router/client'

const rootElement = (
  <StrictMode>
    <Root>
      <SpeedInsights />
      <Analytics />
      <ErrorBoundary fallback={(error) => <h1>{String(error)}</h1>}>
        <Router />
      </ErrorBoundary>
    </Root>
  </StrictMode>
)

if (import.meta.env.WAKU_HYDRATE) {
  hydrateRoot(document.body, rootElement)
} else {
  createRoot(document.body).render(rootElement)
}
