import { keyframes, style } from '@vanilla-extract/css'

function radialGradient(x: string, y: string, colors: string[]) {
  return `radial-gradient(at ${x} ${y}, ${colors.join(', ')})`
}

const backgroundColorMap = {
  blue: {
    start: '50%',
    end: '37%',
    value: '#3a8bfd',
  },
  purple: {
    start: '97%',
    end: '21%',
    value: '#9772fe',
  },
  red: {
    start: '52%',
    end: '99%',
    value: '#fd3a4e',
  },
  green: {
    start: '10%',
    end: '29%',
    value: '#5afc7d',
  },
  beige: {
    start: '97%',
    end: '96%',
    value: '#e4c795',
  },
  cosmicBlue: {
    start: '33%',
    end: '50%',
    value: '#8ca8e8',
  },
  pink: {
    start: '79%',
    end: '53%',
    value: '#eea5ba',
  },
}

const backgroundAnimation = keyframes({
  '0%': { transform: 'translateX(-50%) rotate(0deg)' },
  '50%': { transform: 'translateX(-50%) rotate(270deg)' },
  '100%': { transform: 'translateX(-50%) rotate(0deg)' },
})

export const layout = style({
  maxWidth: 760,
  padding: 64,
  minHeight: '100vh',

  display: 'flex',
  flexDirection: 'column',
  gap: '32px',

  position: 'relative',
  margin: '0 auto',

  selectors: {
    '&:before': {
      position: 'fixed',
      top: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      content: '',
      width: '60%',
      height: '100%',
      backgroundImage: Object.entries(backgroundColorMap)
        .map(([, { start, end, value }]) => {
          return radialGradient(start, end, [`${value} 0`, 'transparent 50%'])
        })
        .join(', '),
      backgroundSize: '180%, 200%',
      filter: 'blur(100px) saturate(150%)',
      animation: `${backgroundAnimation} infinite 20s linear`,
      opacity: 0.2,
      zIndex: -1,
    },
  },
})
