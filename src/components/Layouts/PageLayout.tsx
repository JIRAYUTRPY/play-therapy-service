"use client";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";

export default function Pagelayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main>
        <div className="flex flex-col items-center justify-between text-black-2 lg:h-full">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
