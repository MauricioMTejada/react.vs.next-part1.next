import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Mi Blog Next",
  description: "Blog creado con NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>
          <Link href="/">React vs. NextJS - Part 1: NextJS</Link>
        </h1>
        {children}
      </body>
    </html>
  );
}
