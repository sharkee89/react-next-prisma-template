import "./globals.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-900 text-gray-100`}>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}