import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'
 
export const metadata: Metadata = {
  title: 'Business Consulting Solutions',
  description: 'Empowering businesses with strategic consulting, operational excellence, and digital transformation services.',
 }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <div>
          {children}
                  <Toaster />

        </div>
      </body>
    </html>
  )
}
