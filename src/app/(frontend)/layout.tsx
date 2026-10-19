import React from 'react'
import './globals.css'

export const metadata = {
  description: 'Quality phone chargers, cables, batteries and accessories from Dar es Salaam.',
  title: 'tai – Pride of Africa',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <body className="bg-white text-forest antialiased">
        <main>{children}</main>
      </body>
    </html>
  )
}
