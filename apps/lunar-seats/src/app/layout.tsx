import { FloatingNavbar } from '@repo/ui/components/floating-navbar'
import '@repo/ui/globals.css'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'lunar-seats',
    description: 'Generated by lunar-seats',
    icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
    children,
}: Readonly<{ children: ReactNode }>) {
    return (
        <html lang='en' className={`${inter.className}`}>
            <body>{children}</body>
        </html>
    )
}
