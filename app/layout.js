import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from './components/Sidebar';
import './globals.css'; // Assuming your global styles are here

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'BiasAwareAI',
  description: 'Helps people understand the Bias thtat AI can have',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Sidebar />
        <div style={{ marginLeft: '220px', padding: '20px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}

