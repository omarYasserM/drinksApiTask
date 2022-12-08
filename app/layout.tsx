import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="w-screen font-sans max-w-5xl mx-auto h-screen bg-slate-100 space-y-32">
        {children}
      </body>
    </html>
  );
}
