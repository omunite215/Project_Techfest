import { Navbar, Footer } from "../components";
import Head from "next/head";
import "../styles/globals.css";

export const metadata = {
  title: "TechExtreme",
  description: "Events You Love!!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>
        <main className="w-full overflow-x-hidden bg-whiteTheme">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
