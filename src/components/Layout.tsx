import type { ReactNode } from "react";
import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pt-24 pb-12">
        {children}
      </main>
      <Footer />
    </div>
  );
}
