import { IBM_Plex_Sans } from "next/font/google"
import { Providers } from '../components/Providers'
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header";
import '../globals.css'


const open = IBM_Plex_Sans({ subsets: ["latin"], weight: '400' })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open.className}>
        <div className="dark:bg-[#1B1B1F]">

          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </div>

      </body>
    </html>
  );
}