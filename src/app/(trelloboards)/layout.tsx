import { Footer } from '@/components/footer';
import Navbar from '@/components/nav-bar';
import React from 'react'

export default function BoardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
