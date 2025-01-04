import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="container m-auto p-2 px-4 sm:px-6 md:px-8"
      style={{
        background: "linear-gradient(to right, #ffffff, #f7f9fc)",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Navbar />

      <main style={{ padding: "2rem", minHeight: "80vh" }}>
        {children}
      </main>

      <Footer/>
    </div>
  );
}

export default Layout


