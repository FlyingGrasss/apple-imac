import Navbar from "@/components/Navbar";
import "./globals.css?inline";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
