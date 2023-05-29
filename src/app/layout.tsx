import { GlobalContextProvider } from "./context/login";
import NavLink from "../shared/components/nav-link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
 // <nav>
 // <NavLink href="/">Home</NavLink>
 // <NavLink href="/secondary/cliente">cliente</NavLink>
//</nav>
  return (
    <html style={{margin: 0, padding: 0}} lang="pt-br">
       
      <body style={{padding: 0, margin: 0, backgroundColor: '#f3f3f3' ,color: 'black'}}>
       <GlobalContextProvider>
        {children}
       </GlobalContextProvider>
      </body>
    </html>
  );
}
