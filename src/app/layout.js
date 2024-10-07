import { IBM_Plex_Sans } from "next/font/google"
import { Providers } from '../components/Providers'

const open = IBM_Plex_Sans({ subsets: ["latin"], weight: '400' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}