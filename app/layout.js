import "./globals.css";

export const metadata = {
  title: "Home Inventory dot Earth",
  description: "Placeholder website for a Home Inventory management system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
