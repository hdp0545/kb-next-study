import Header from '@/components/Header'
import type { ReactNode } from 'react'

interface props {
  chlidren: ReactNode
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
