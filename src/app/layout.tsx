//'use client'

import NavLink from "./nav-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    
 
  return (
    <html lang="pt-br">
      <body style={{padding: 0, margin: 0, backgroundColor: '#f3ff'}}>
        <nav>
           <NavLink href='/'>Home</NavLink>
           <NavLink href='/secondary/cliente'>cliente</NavLink>

        </nav>
        {children}
      </body>
    </html>
  )
}
