import { keyframes, style } from '@vanilla-extract/css';
import { calc } from '@vanilla-extract/css-utils';

export const appStyle = style({
  textAlign: 'center',
})

const appLogoSpin = keyframes({
  '0%': {
    rotate: '0deg',
  },
  '100%': {
    rotate: '360deg',
  }
})

export const appLogoStyle = style({
  height: '40vmin',
  pointerEvents: 'none',
  '@media': {
    'prefers-reduced-motion: no-preference': {
      animationName: appLogoSpin,
      animationIterationCount: 'infinite',
      animationDuration: '20s',
      animationTimingFunction: 'linear',
    }
  }
})

const fontSize = calc.add('10px', '2vmin')

export const appHeaderStyle = style({
  backgroundColor: '#282c34',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize,
  color: 'white',
})

export const appLinkStyle = style({
  color: '#61dafb'
})

export const buttonStyle = style({
  fontSize,
})


