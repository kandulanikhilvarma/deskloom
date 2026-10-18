import type { Metadata, Viewport } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Deskloom — Make room for better work', description: 'Plan a workspace around your space, what you own, and what you want to spend. Real products. Thoughtful choices.', manifest: '/manifest.webmanifest', icons: { icon:'/icon.svg', apple:'/icon.svg' } };
export const viewport: Viewport = { width:'device-width', initialScale:1, themeColor:'#244e42' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
