import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./header/page";
import Footer from "./footer/page";



const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900' ], // Add the weights you need here
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Google Tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10888307324"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-10888307324');
            `,
          }}
        />
        </head>
      <body className={poppins.className}>
      <Header/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
