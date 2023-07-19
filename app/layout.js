import './globals.css'
import { Inter, Montserrat } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const montserrat = Montserrat({subsets: ['latin']})

export const metadata = {
  title: 'Spoontoo',
  description: 'Next gen restaurant menus',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;