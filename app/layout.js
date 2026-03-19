import './globals.css'

export const metadata = {
  title: 'Trixy | Cybersecurity & Digital Forensics',
  description: 'Portfolio of Trixy, a Cybersecurity & Digital Forensics student.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Safely importing your Google Fonts here instead of CSS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=JetBrains+Mono:wght@300;400;500;700&family=Lora:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}