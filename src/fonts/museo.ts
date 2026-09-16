import localFont from 'next/font/local'

export const museoSans = localFont({
  src: [
    {
      path: './museosans300.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './museosans300italic.ttf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './museosans500.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './museosans500italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './museosans700.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './museosans700italic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './museosans900.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './museosans900italic.ttf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-museo-sans',
})
