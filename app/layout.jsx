import './globals.css'

export const metadata = {
  title: 'Matheus Mendonca MKT',
  description: 'Landing page de Marketing Inbound',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
