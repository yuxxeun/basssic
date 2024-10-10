import { ReactLenis } from 'lenis/react'

function SmoothScroll({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ReactLenis root>{children}</ReactLenis>
}

export default SmoothScroll
