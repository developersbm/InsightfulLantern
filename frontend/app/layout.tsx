import "./globals.css";
import SessionProvider from "./SessionProvider";
import LogoutButton from "./components/LogoutButton";

export default async function RootLayout({
 children,
}: {
 children: React.ReactNode;
}) {
 return (
  <html lang="en" className="h-full bg-gray-900">
   <body className="h-full overflow-hidden">
    <SessionProvider>
     {" "}
     <LogoutButton />
     {children}
    </SessionProvider>
   </body>
  </html>
 );
}
