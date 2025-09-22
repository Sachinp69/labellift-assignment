import Header from "@/components/Header";
import "./globals.css";
import { ThemeProvider } from "./themeContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){
              try{
                const t = localStorage.getItem('theme');
                const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (t === 'dark' || (!t && prefersDark)) document.documentElement.classList.add('dark');
                else document.documentElement.classList.remove('dark');
              }catch(e){}
            })();`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Header />
          {children}</ThemeProvider>
      </body>
    </html>
  );
}
