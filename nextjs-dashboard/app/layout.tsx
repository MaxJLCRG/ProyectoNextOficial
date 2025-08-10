import { montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <p className= 'py-10 flex justify-center items-center'>
          Esto es parte del layout, va a estar en todos los html. Envuelve todo los html que haga.
        </p>

        {children}
        <footer className= 'py-10 flex justify-center items-center'>
          Hecho con amor para Mati
        </footer>
      </body>
    </html>
  );
}
